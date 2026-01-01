/**
 * BKS官方网站 - 1V1人机对战（最终修正版）
 * 修正内容：
 * 1. 斗转星移：当使用斗转星移时，对方的行动完全无效
 * 2. 玩家可以选择行动后更改选择
 * 3. 防御系统优化
 * 4. AI行动隐藏
 */

// 游戏状态管理
const AIGameV2 = {
    // 游戏状态
    state: {
        // 玩家状态
        player: {
            character: null,
            hp: 3,
            maxHp: 3,
            energy: 2,
            maxEnergy: 10,
            defense: 0, // 当前回合的防御点数（只在本回合有效）
            selectedAction: null
        },
        
        // AI状态
        ai: {
            character: null,
            hp: 3,
            maxHp: 3,
            energy: 2,
            maxEnergy: 10,
            defense: 0,
            selectedAction: null
        },
        
        // 游戏状态
        isPlayerTurnOwner: true,
        isGameStarted: false,
        isGameOver: false,
        round: 1,
        logMessages: [],
        playerActionSelected: false,
        aiActionSelected: false
    },
    
    // 行动定义
    actions: [
        { id: 1, name: "普攻", cost: 1, damage: 1, type: "attack", description: "造成1点伤害" },
        { id: 2, name: "重击", cost: 2, damage: 2, type: "attack", description: "造成2点伤害" },
        { id: 3, name: "铁山靠", cost: 3, damage: 3, type: "attack", description: "造成3点伤害" },
        { id: 4, name: "防守", cost: 1, defense: 1, type: "defense", description: "获得1点防御" },
        { id: 5, name: "驻守", cost: 2, defense: 2, type: "defense", description: "获得2点防御" },
        { id: 6, name: "闪避", cost: 3, defense: 3, type: "defense", description: "获得3点防御" },
        { id: 7, name: "自刎", cost: 0, selfDamage: 1, type: "special", description: "自己-1血量" },
        { id: 8, name: "能量回复", cost: 0, energyRecover: 1, type: "special", description: "回复1点能量" },
        { id: 9, name: "血量回复", cost: 1, hpRecover: 1, type: "special", description: "回复1点血量" },
        { id: 10, name: "斗转星移", cost: 3, type: "special", description: "反弹对方行动" }
    ],
    
    // 初始化游戏
    init() {
        console.log("初始化1V1人机对战（最终修正版）...");
        this.setupCharacterSelection();
        this.setupEventListeners();
    },
    
    // 设置角色选择
    setupCharacterSelection() {
        const selectionGrid = document.getElementById('selection-grid');
        if (!selectionGrid) return;
        
        selectionGrid.innerHTML = '';
        
        const availableCharacters = [...CharacterManager.characters];
        const selectedCharacters = [];
        
        for (let i = 0; i < 3; i++) {
            if (availableCharacters.length === 0) break;
            const randomIndex = Math.floor(Math.random() * availableCharacters.length);
            selectedCharacters.push(availableCharacters[randomIndex]);
            availableCharacters.splice(randomIndex, 1);
        }
        
        selectedCharacters.forEach(character => {
            const option = document.createElement('div');
            option.className = 'character-option';
            option.innerHTML = `
                <img src="${character.image}" alt="${character.name}" 
                     onerror="this.src='https://placehold.co/100x100/667eea/ffffff?text=${encodeURIComponent(character.name)}'">
                <h3>${character.name}</h3>
                <div class="tags">
                    ${character.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${character.description}</p>
            `;
            option.addEventListener('click', () => this.selectCharacter(character, option));
            selectionGrid.appendChild(option);
        });
        
        // 随机选择AI角色
        const aiCharacter = CharacterManager.characters[
            Math.floor(Math.random() * CharacterManager.characters.length)
        ];
        this.state.ai.character = aiCharacter;
        console.log("AI角色已选择:", aiCharacter.name);
    },
    
    // 选择玩家角色
    selectCharacter(character, element) {
        document.querySelectorAll('.character-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        element.classList.add('selected');
        this.state.player.character = character;
        
        const startBtn = document.getElementById('start-battle-btn');
        if (startBtn) startBtn.disabled = false;
        console.log("玩家角色已选择:", character.name);
    },
    
    // 开始对战
    startBattle() {
        if (!this.state.player.character || !this.state.ai.character) {
            alert("请先选择角色！");
            return;
        }
        
        document.getElementById('character-selection').classList.add('hidden');
        document.getElementById('battle-interface').classList.remove('hidden');
        
        this.resetGameState();
        this.state.isPlayerTurnOwner = Math.random() > 0.5;
        this.state.isGameStarted = true;
        
        this.updateUI();
        this.generateActionButtons();
        
        this.addLogMessage(`对战开始！玩家选择：${this.state.player.character.name}，AI选择：${this.state.ai.character.name}`, 'system');
        this.addLogMessage(this.state.isPlayerTurnOwner ? "你获得了攻击权！" : "AI获得了攻击权！", 'system');
        this.addLogMessage("请选择你的行动...", 'system');
        
        // AI自动选择行动（不显示选择）
        this.selectAIAction();
    },
    
    // 重置游戏状态
    resetGameState() {
        this.state.player.hp = 3;
        this.state.player.energy = 2;
        this.state.player.defense = 0;
        this.state.player.selectedAction = null;
        
        this.state.ai.hp = 3;
        this.state.ai.energy = 2;
        this.state.ai.defense = 0;
        this.state.ai.selectedAction = null;
        
        this.state.round = 1;
        this.state.isGameOver = false;
        this.state.playerActionSelected = false;
        this.state.aiActionSelected = false;
        
        this.updateCharacterDisplay();
    },
    
    // 更新角色显示
    updateCharacterDisplay() {
        // 玩家角色
        const playerAvatar = document.getElementById('player-avatar');
        const playerName = document.getElementById('player-name');
        const playerTags = document.getElementById('player-tags');
        
        if (this.state.player.character) {
            playerAvatar.src = this.state.player.character.image;
            playerAvatar.onerror = () => {
                playerAvatar.src = `https://placehold.co/100x100/667eea/ffffff?text=${encodeURIComponent(this.state.player.character.name)}`;
            };
            playerName.textContent = this.state.player.character.name;
            
            playerTags.innerHTML = '';
            this.state.player.character.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'character-tag';
                tagSpan.textContent = tag;
                playerTags.appendChild(tagSpan);
            });
        }
        
        // AI角色
        const aiAvatar = document.getElementById('ai-avatar');
        const aiName = document.getElementById('ai-name');
        const aiTags = document.getElementById('ai-tags');
        
        if (this.state.ai.character) {
            aiAvatar.src = this.state.ai.character.image;
            aiAvatar.onerror = () => {
                aiAvatar.src = `https://placehold.co/100x100/667eea/ffffff?text=${encodeURIComponent(this.state.ai.character.name)}`;
            };
            aiName.textContent = this.state.ai.character.name;
            
            aiTags.innerHTML = '';
            this.state.ai.character.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'character-tag';
                tagSpan.textContent = tag;
                aiTags.appendChild(tagSpan);
            });
        }
    },
    
    // 生成行动按钮
    generateActionButtons() {
        const playerActionsGrid = document.getElementById('player-actions-grid');
        const aiActionsGrid = document.getElementById('ai-actions-grid');
        
        if (!playerActionsGrid || !aiActionsGrid) return;
        
        playerActionsGrid.innerHTML = '';
        aiActionsGrid.innerHTML = '';
        
        // 为玩家生成行动按钮
        this.actions.forEach(action => {
            const button = this.createActionButton(action, true);
            playerActionsGrid.appendChild(button);
        });
        
        // 为AI生成行动按钮（只读显示）
        this.actions.forEach(action => {
            const button = this.createActionButton(action, false);
            aiActionsGrid.appendChild(button);
        });
        
        this.updateActionButtons();
    },
    
    // 创建行动按钮
    createActionButton(action, isPlayer) {
        const button = document.createElement('div');
        button.className = `action-btn-v2 ${action.type} ${isPlayer ? 'clickable' : 'readonly'}`;
        
        if (!isPlayer) {
            button.classList.add('disabled');
        }
        
        button.innerHTML = `
            <div class="action-number">${action.id}</div>
            <div class="action-name">${action.name}</div>
            <div class="action-cost">${action.cost > 0 ? `消耗: ${action.cost}能` : '无消耗'}</div>
            <div class="action-description">${action.description}</div>
        `;
        
        if (isPlayer) {
            button.addEventListener('click', () => this.selectPlayerAction(action, button));
        }
        
        button.id = `${isPlayer ? 'player' : 'ai'}-action-${action.id}`;
        return button;
    },
    
    // 选择玩家行动（修复版：允许更改选择）
    selectPlayerAction(action, button) {
        if (this.state.playerActionSelected || this.state.isGameOver) return;
        
        if (action.type === 'attack' && !this.state.isPlayerTurnOwner) {
            this.addLogMessage("你没有攻击权，不能选择攻击行动！", 'system');
            return;
        }
        
        if (action.cost > this.state.player.energy) {
            this.addLogMessage(`能量不足！需要${action.cost}能量，当前只有${this.state.player.energy}能量。`, 'system');
            return;
        }
        
        // 检查是否点击了已选择的行动（取消选择）
        const isAlreadySelected = this.state.player.selectedAction && 
            this.state.player.selectedAction.id === action.id;
        
        // 更新选择
        if (isAlreadySelected) {
            // 取消选择
            this.state.player.selectedAction = null;
            button.classList.remove('selected');
            
            // 更新显示
            const selectedDisplay = document.getElementById('player-selected-action');
            if (selectedDisplay) {
                selectedDisplay.textContent = "等待选择行动...";
                selectedDisplay.className = "waiting-selection";
            }
            
            this.addLogMessage("你取消了行动选择", 'player');
        } else {
            // 选择新行动
            this.state.player.selectedAction = action;
            
            // 更新按钮样式
            document.querySelectorAll('#player-actions-grid .action-btn-v2').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            button.classList.add('selected');
            
            // 更新显示
            const selectedDisplay = document.getElementById('player-selected-action');
            if (selectedDisplay) {
                selectedDisplay.textContent = `已选择：${action.name}`;
                selectedDisplay.className = 'selected-action';
            }
            
            this.addLogMessage(`你选择了行动：${action.name}`, 'player');
        }
        
        // 如果AI已选择，启用确认按钮
        if (this.state.ai.selectedAction && this.state.player.selectedAction) {
            this.enableConfirmButton();
        } else {
            this.disableConfirmButton();
        }
    },
    
    // AI选择行动
    selectAIAction() {
        if (this.state.ai.selectedAction || this.state.isGameOver) return;
        
        const availableActions = this.getAvailableActions(this.state.ai, this.state.isPlayerTurnOwner);
        
        if (availableActions.length === 0) {
            const energyAction = this.actions.find(a => a.id === 8);
            this.state.ai.selectedAction = energyAction;
        } else {
            const aiAction = this.decideAIAction(availableActions);
            this.state.ai.selectedAction = aiAction;
        }
        
        // 不显示AI的具体选择，只显示提示
        const selectedDisplay = document.getElementById('ai-selected-action');
        if (selectedDisplay) {
            selectedDisplay.textContent = "AI已选择行动";
            selectedDisplay.className = "waiting-selection";
        }
        
        // 不高亮AI的按钮
        const aiButton = document.getElementById(`ai-action-${this.state.ai.selectedAction.id}`);
        if (aiButton) {
            aiButton.classList.remove('selected');
        }
        
        this.addLogMessage("AI已选择行动", 'system');
        
        // 如果玩家已选择，启用确认按钮
        if (this.state.player.selectedAction && this.state.ai.selectedAction) {
            this.enableConfirmButton();
        }
    },
    
    // 获取可用行动列表
    getAvailableActions(characterState, isTurnOwner) {
        return this.actions.filter(action => {
            if (action.cost > characterState.energy) return false;
            
            if (action.type === 'attack') {
                if (characterState === this.state.ai && !isTurnOwner) return false;
                if (characterState === this.state.player && !isTurnOwner) return false;
            }
            
            return true;
        });
    },
    
    // AI决策逻辑
    decideAIAction(availableActions) {
        const player = this.state.player;
        const ai = this.state.ai;
        
        // 如果血量低，优先回血
        if (ai.hp <= 1 && ai.energy >= 1) {
            const healAction = availableActions.find(a => a.id === 9);
            if (healAction) return healAction;
        }
        
        // 如果能量低，优先回能
        if (ai.energy <= 1) {
            const energyAction = availableActions.find(a => a.id === 8);
            if (energyAction) return energyAction;
        }
        
        // 如果有攻击权，优先攻击
        if (!this.state.isPlayerTurnOwner) {
            const attackActions = availableActions.filter(a => a.type === 'attack');
            if (attackActions.length > 0) {
                const sortedAttacks = attackActions.sort((a, b) => b.damage - a.damage);
                for (const attack of sortedAttacks) {
                    if (attack.cost <= ai.energy) {
                        return attack;
                    }
                }
            }
        }
        
        // 如果玩家防御低且AI有攻击权，攻击
        if (player.defense === 0 && !this.state.isPlayerTurnOwner) {
            const attackActions = availableActions.filter(a => a.type === 'attack');
            if (attackActions.length > 0) {
                const affordableAttacks = attackActions.filter(a => a.cost <= ai.energy);
                if (affordableAttacks.length > 0) {
                    return affordableAttacks[0];
                }
            }
        }
        
        // 如果玩家有攻击权，AI优先防御
        if (this.state.isPlayerTurnOwner && ai.energy >= 1) {
            const defenseActions = availableActions.filter(a => a.type === 'defense');
            if (defenseActions.length > 0) {
                const affordableDefense = defenseActions.filter(a => a.cost <= ai.energy);
                if (affordableDefense.length > 0) {
                    return affordableDefense.sort((a, b) => b.defense - a.defense)[0];
                }
            }
        }
        
        // 否则随机选择
        const randomIndex = Math.floor(Math.random() * availableActions.length);
        return availableActions[randomIndex];
    },
    
    // 启用确认按钮
    enableConfirmButton() {
        const confirmBtn = document.getElementById('confirm-action');
        if (confirmBtn) {
            confirmBtn.disabled = false;
            this.addLogMessage("双方已选择行动，请确认进行结算", 'system');
        }
    },
    
    // 禁用确认按钮
    disableConfirmButton() {
        const confirmBtn = document.getElementById('confirm-action');
        if (confirmBtn) {
            confirmBtn.disabled = true;
        }
    },
    
    // 确认行动并结算
    confirmAction() {
        if (!this.state.player.selectedAction || !this.state.ai.selectedAction) {
            this.addLogMessage("请等待双方都选择行动", 'system');
            return;
        }
        
        // 标记行动已确认
        this.state.playerActionSelected = true;
        this.state.aiActionSelected = true;
        
        // 显示AI的选择
        this.showAIActionSelection();
        
        // 短暂延迟后结算
        setTimeout(() => {
            this.resolveRound();
            if (this.checkGameOver()) return;
            this.prepareNextRound();
        }, 1500);
    },
    
    // 显示AI的选择
    showAIActionSelection() {
        const selectedDisplay = document.getElementById('ai-selected-action');
        if (selectedDisplay && this.state.ai.selectedAction) {
            selectedDisplay.textContent = `AI选择：${this.state.ai.selectedAction.name}`;
            selectedDisplay.className = 'selected-action';
            
            // 高亮AI选择的按钮
            const aiButton = document.getElementById(`ai-action-${this.state.ai.selectedAction.id}`);
            if (aiButton) {
                aiButton.classList.add('selected');
            }
        }
        
        this.addLogMessage(`AI的选择揭晓：${this.state.ai.selectedAction.name}`, 'ai');
    },
    
    // 结算回合（修复版）
    resolveRound() {
        const playerAction = this.state.player.selectedAction;
        const aiAction = this.state.ai.selectedAction;
        
        this.addLogMessage(`=== 第${this.state.round}回合结算 ===`, 'system');
        
        // 检查是否有斗转星移
        const playerUsesDouzhuan = playerAction && playerAction.id === 10;
        const aiUsesDouzhuan = aiAction && aiAction.id === 10;
        
        // 处理斗转星移的反弹效果
        if (playerUsesDouzhuan) {
            this.handleDouzhuanxingyiEffect('player', aiAction);
        }
        
        if (aiUsesDouzhuan) {
            this.handleDouzhuanxingyiEffect('ai', playerAction);
        }
        
        // 执行双方行动（如果行动没有被斗转星移无效化）
        if (!playerUsesDouzhuan || (playerUsesDouzhuan && !aiUsesDouzhuan)) {
            this.executePlayerAction(playerAction, aiAction);
        }
        
        if (!aiUsesDouzhuan || (aiUsesDouzhuan && !playerUsesDouzhuan)) {
            this.executeAIAction(aiAction, playerAction);
        }
        
        // 重置防御值（防御只持续当前回合）
        this.state.player.defense = 0;
        this.state.ai.defense = 0;
        
        // 确保数值在有效范围内
        this.clampStats();
        
        // 更新UI
        this.updateUI();
    },
    
    // 处理斗转星移效果（修复版：对方行动完全无效）
    handleDouzhuanxingyiEffect(userType, targetAction) {
        const user = userType === 'player' ? this.state.player : this.state.ai;
        const target = userType === 'player' ? this.state.ai : this.state.player;
        const userName = userType === 'player' ? '你' : 'AI';
        const targetName = userType === 'player' ? 'AI' : '你';
        
        // 消耗斗转星移的能量
        user.energy -= 3;
        this.addLogMessage(`${userName}使用【斗转星移】`, userType === 'player' ? 'player' : 'ai');
        
        if (!targetAction) return;
        
        // 斗转星移的效果：对方的行动无效，并根据对方行动产生效果
        this.addLogMessage(`${targetName}的行动【${targetAction.name}】被斗转星移无效化！`, userType === 'player' ? 'player' : 'ai');
        
        // 根据对方行动产生反弹效果
        switch (targetAction.type) {
            case 'attack':
                // 对方使用攻击行动时，反弹攻击伤害
                const damage = targetAction.damage || 0;
                const defense = user.defense || 0;
                const actualDamage = Math.max(0, damage - defense);
                
                if (actualDamage > 0) {
                    target.hp -= actualDamage;
                    this.addLogMessage(`${userName}将${targetName}的攻击反弹回去，对${targetName}造成${actualDamage}点伤害${defense > 0 ? `（被防御抵消${defense}点）` : ''}`, userType === 'player' ? 'player' : 'ai');
                } else {
                    this.addLogMessage(`${userName}将${targetName}的攻击反弹回去，但被完全防御！`, userType === 'player' ? 'player' : 'ai');
                }
                break;
                
            case 'special':
                if (targetAction.id === 7) { // 自刎
                    // 对方使用自刎时，你扣除一点血
                    user.hp -= 1;
                    this.addLogMessage(`${userName}受到斗转星移效果，扣除1点生命值`, userType === 'player' ? 'player' : 'ai');
                } else if (targetAction.id === 8) { // 能量回复
                    // 对方使用回复能量时，你回复一点能量
                    user.energy += 1;
                    this.addLogMessage(`${userName}受到斗转星移效果，回复1点能量`, userType === 'player' ? 'player' : 'ai');
                } else if (targetAction.id === 9) { // 血量回复
                    // 对方使用回血时，你回复一点体力
                    user.hp += 1;
                    this.addLogMessage(`${userName}受到斗转星移效果，回复1点生命值`, userType === 'player' ? 'player' : 'ai');
                } else if (targetAction.id === 10) { // 对方也使用斗转星移
                    // 双方都使用斗转星移，抵消
                    this.addLogMessage("双方都使用斗转星移，效果抵消", 'system');
                }
                break;
                
            case 'defense':
                // 对方使用防御行动，无效果
                this.addLogMessage(`斗转星移对${targetName}的防御行动无效`, userType === 'player' ? 'player' : 'ai');
                break;
        }
    },
    
    // 执行玩家行动
    executePlayerAction(action, aiAction) {
        if (!action) return;
        
        const player = this.state.player;
        const ai = this.state.ai;
        
        // 消耗能量
        if (action.cost > 0) {
            player.energy -= action.cost;
            this.addLogMessage(`你消耗${action.cost}点能量`, 'player');
        }
        
        // 根据行动类型处理
        switch (action.type) {
            case 'attack':
                const damage = action.damage || 0;
                const defense = ai.defense || 0;
                const actualDamage = Math.max(0, damage - defense);
                
                if (actualDamage > 0) {
                    ai.hp -= actualDamage;
                    this.addLogMessage(`你对AI造成${actualDamage}点伤害${defense > 0 ? `（被防御抵消${defense}点）` : ''}`, 'player');
                } else {
                    this.addLogMessage(`你的攻击被AI完全防御！`, 'player');
                }
                break;
                
            case 'defense':
                player.defense = action.defense || 0;
                this.addLogMessage(`你获得${player.defense}点防御`, 'player');
                break;
                
            case 'special':
                this.executeSpecialAction(action, player, '你', 'player');
                break;
        }
    },
    
    // 执行AI行动
    executeAIAction(action, playerAction) {
        if (!action) return;
        
        const player = this.state.player;
        const ai = this.state.ai;
        
        // 消耗能量
        if (action.cost > 0) {
            ai.energy -= action.cost;
            this.addLogMessage(`AI消耗${action.cost}点能量`, 'ai');
        }
        
        // 根据行动类型处理
        switch (action.type) {
            case 'attack':
                const damage = action.damage || 0;
                const defense = player.defense || 0;
                const actualDamage = Math.max(0, damage - defense);
                
                if (actualDamage > 0) {
                    player.hp -= actualDamage;
                    this.addLogMessage(`AI对你造成${actualDamage}点伤害${defense > 0 ? `（被防御抵消${defense}点）` : ''}`, 'ai');
                } else {
                    this.addLogMessage(`AI的攻击被你完全防御！`, 'ai');
                }
                break;
                
            case 'defense':
                ai.defense = action.defense || 0;
                this.addLogMessage(`AI获得${ai.defense}点防御`, 'ai');
                break;
                
            case 'special':
                this.executeSpecialAction(action, ai, 'AI', 'ai');
                break;
        }
    },
    
    // 执行特殊行动
    executeSpecialAction(action, character, characterName, logType) {
        switch (action.id) {
            case 7: // 自刎
                character.hp -= 1;
                this.addLogMessage(`${characterName}自损1点生命值`, logType);
                break;
                
            case 8: // 能量回复
                character.energy += 1;
                this.addLogMessage(`${characterName}回复1点能量`, logType);
                break;
                
            case 9: // 血量回复
                character.hp += 1;
                this.addLogMessage(`${characterName}回复1点生命值`, logType);
                break;
        }
    },
    
    // 确保数值在有效范围内
    clampStats() {
        // 玩家
        this.state.player.hp = Math.max(0, Math.min(this.state.player.maxHp, this.state.player.hp));
        this.state.player.energy = Math.max(0, Math.min(this.state.player.maxEnergy, this.state.player.energy));
        
        // AI
        this.state.ai.hp = Math.max(0, Math.min(this.state.ai.maxHp, this.state.ai.hp));
        this.state.ai.energy = Math.max(0, Math.min(this.state.ai.maxEnergy, this.state.ai.energy));
    },
    
    // 准备下一回合
    prepareNextRound() {
        // 切换回合拥有者
        this.state.isPlayerTurnOwner = !this.state.isPlayerTurnOwner;
        this.state.round++;
        
        // 重置行动选择
        this.state.player.selectedAction = null;
        this.state.ai.selectedAction = null;
        this.state.playerActionSelected = false;
        this.state.aiActionSelected = false;
        
        // 重置显示
        const playerSelected = document.getElementById('player-selected-action');
        const aiSelected = document.getElementById('ai-selected-action');
        
        if (playerSelected) {
            playerSelected.textContent = "等待选择行动...";
            playerSelected.className = "waiting-selection";
        }
        
        if (aiSelected) {
            aiSelected.textContent = "AI正在思考...";
            aiSelected.className = "waiting-selection";
        }
        
        // 重置按钮样式
        document.querySelectorAll('.action-btn-v2.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // 禁用确认按钮
        this.disableConfirmButton();
        
        // 更新行动按钮可用性
        this.updateActionButtons();
        
        // 添加日志
        this.addLogMessage(`=== 第${this.state.round}回合开始 ===`, 'system');
        this.addLogMessage(this.state.isPlayerTurnOwner ? "你获得了攻击权！" : "AI获得了攻击权！", 'system');
        this.addLogMessage("请选择你的行动...", 'system');
        
        // AI自动选择行动（隐藏选择）
        setTimeout(() => {
            this.selectAIAction();
        }, 1000);
        
        // 更新UI
        this.updateUI();
    },
    
    // 更新行动按钮可用性
    updateActionButtons() {
        const playerButtons = document.querySelectorAll('#player-actions-grid .action-btn-v2');
        
        playerButtons.forEach(button => {
            const actionId = parseInt(button.querySelector('.action-number').textContent);
            const action = this.actions.find(a => a.id === actionId);
            
            if (!action) return;
            
            // 检查是否为攻击行动且玩家没有攻击权
            if (action.type === 'attack' && !this.state.isPlayerTurnOwner) {
                button.classList.add('disabled');
                return;
            }
            
            // 检查能量是否足够
            if (action.cost > this.state.player.energy) {
                button.classList.add('disabled');
            } else {
                button.classList.remove('disabled');
            }
        });
    },
    
    // 检查游戏是否结束
    checkGameOver() {
        if (this.state.player.hp <= 0) {
            this.showResult(false);
            return true;
        }
        
        if (this.state.ai.hp <= 0) {
            this.showResult(true);
            return true;
        }
        
        return false;
    },
    
    // 显示结果
    showResult(isPlayerWin) {
        this.state.isGameOver = true;
        
        const modal = document.getElementById('result-modal');
        const content = document.getElementById('result-content');
        
        if (isPlayerWin) {
            content.className = 'result-content win';
            content.innerHTML = `
                <h2><i class="fas fa-trophy"></i> 胜利！</h2>
                <p>恭喜你战胜了AI对手！</p>
                <div class="result-character">
                    <img src="${this.state.player.character.image}" alt="${this.state.player.character.name}">
                    <h3>${this.state.player.character.name}</h3>
                </div>
                <div class="result-stats">
                    <p>剩余生命值: ${this.state.player.hp}</p>
                    <p>剩余能量: ${this.state.player.energy}/10</p>
                    <p>总回合数: ${this.state.round}</p>
                </div>
                <div class="result-buttons">
                    <button class="rematch-btn" onclick="AIGameV2.rematch()">
                        <i class="fas fa-redo"></i> 再战一局
                    </button>
                    <button class="home-btn" onclick="window.location.href='index.html'">
                        <i class="fas fa-home"></i> 返回首页
                    </button>
                </div>
            `;
        } else {
            content.className = 'result-content lose';
            content.innerHTML = `
                <h2><i class="fas fa-skull"></i> 失败</h2>
                <p>很遗憾，你被AI击败了</p>
                <div class="result-character">
                    <img src="${this.state.ai.character.image}" alt="${this.state.ai.character.name}">
                    <h3>${this.state.ai.character.name}</h3>
                </div>
                <div class="result-stats">
                    <p>AI剩余生命值: ${this.state.ai.hp}</p>
                    <p>AI剩余能量: ${this.state.ai.energy}/10</p>
                    <p>总回合数: ${this.state.round}</p>
                </div>
                <div class="result-buttons">
                    <button class="rematch-btn" onclick="AIGameV2.rematch()">
                        <i class="fas fa-redo"></i> 重新挑战
                    </button>
                    <button class="home-btn" onclick="window.location.href='index.html'">
                        <i class="fas fa-home"></i> 返回首页
                    </button>
                </div>
            `;
        }
        
        modal.classList.add('show');
    },
    
    // 重新开始
    rematch() {
        document.getElementById('result-modal').classList.remove('show');
        document.getElementById('character-selection').classList.remove('hidden');
        document.getElementById('battle-interface').classList.add('hidden');
        
        this.setupCharacterSelection();
        
        const startBtn = document.getElementById('start-battle-btn');
        if (startBtn) startBtn.disabled = true;
        
        this.state.logMessages = [];
        this.updateLogDisplay();
    },
    
    // 重新开始对战
    restartFromBattle() {
        document.getElementById('character-selection').classList.remove('hidden');
        document.getElementById('battle-interface').classList.add('hidden');
        
        this.setupCharacterSelection();
        
        const startBtn = document.getElementById('start-battle-btn');
        if (startBtn) startBtn.disabled = true;
        
        this.state.logMessages = [];
        this.updateLogDisplay();
    },
    
    // 更新UI
    updateUI() {
        // 更新玩家状态
        document.getElementById('player-hp').textContent = `${this.state.player.hp}/${this.state.player.maxHp}`;
        document.getElementById('player-energy').textContent = `${this.state.player.energy}/${this.state.player.maxEnergy}`;
        
        const playerHpFill = document.getElementById('player-hp-fill');
        const playerEnergyFill = document.getElementById('player-energy-fill');
        
        if (playerHpFill) {
            const hpPercent = (this.state.player.hp / this.state.player.maxHp) * 100;
            playerHpFill.style.width = `${hpPercent}%`;
        }
        
        if (playerEnergyFill) {
            const energyPercent = (this.state.player.energy / this.state.player.maxEnergy) * 100;
            playerEnergyFill.style.width = `${energyPercent}%`;
        }
        
        // 更新AI状态
        document.getElementById('ai-hp').textContent = `${this.state.ai.hp}/${this.state.ai.maxHp}`;
        document.getElementById('ai-energy').textContent = `${this.state.ai.energy}/${this.state.ai.maxEnergy}`;
        
        const aiHpFill = document.getElementById('ai-hp-fill');
        const aiEnergyFill = document.getElementById('ai-energy-fill');
        
        if (aiHpFill) {
            const hpPercent = (this.state.ai.hp / this.state.ai.maxHp) * 100;
            aiHpFill.style.width = `${hpPercent}%`;
        }
        
        if (aiEnergyFill) {
            const energyPercent = (this.state.ai.energy / this.state.ai.maxEnergy) * 100;
            aiEnergyFill.style.width = `${energyPercent}%`;
        }
        
        // 更新回合信息
        const turnTitle = document.getElementById('current-turn-title');
        const turnDescription = document.getElementById('current-turn-description');
        const turnOwner = document.getElementById('turn-owner');
        
        if (turnTitle) turnTitle.textContent = `第${this.state.round}回合`;
        
        if (this.state.isPlayerTurnOwner) {
            if (turnDescription) turnDescription.textContent = "你拥有攻击权，可以使用全部10种行动！";
            if (turnOwner) turnOwner.textContent = "玩家";
            
            document.getElementById('player-turn-indicator').classList.remove('hidden');
            document.getElementById('ai-turn-indicator').classList.add('hidden');
        } else {
            if (turnDescription) turnDescription.textContent = "AI拥有攻击权，你只能选择除攻击行动以外的行动";
            if (turnOwner) turnOwner.textContent = "AI";
            
            document.getElementById('player-turn-indicator').classList.add('hidden');
            document.getElementById('ai-turn-indicator').classList.remove('hidden');
        }
    },
    
    // 添加日志消息
    addLogMessage(message, type = 'system') {
        const timestamp = new Date().toLocaleTimeString();
        this.state.logMessages.push({
            time: timestamp,
            message: message,
            type: type
        });
        
        if (this.state.logMessages.length > 50) {
            this.state.logMessages.shift();
        }
        
        this.updateLogDisplay();
    },
    
    // 更新日志显示
    updateLogDisplay() {
        const logContainer = document.getElementById('log-messages');
        if (!logContainer) return;
        
        logContainer.innerHTML = '';
        
        this.state.logMessages.forEach(log => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `log-message ${log.type}`;
            messageDiv.innerHTML = `
                <span style="color: #718096; font-size: 0.8rem;">[${log.time}]</span>
                <span style="margin-left: 10px;">${log.message}</span>
            `;
            logContainer.appendChild(messageDiv);
        });
        
        logContainer.scrollTop = logContainer.scrollHeight;
    },
    
    // 设置事件监听器
    setupEventListeners() {
        const startBtn = document.getElementById('start-battle-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startBattle());
        }
        
        const confirmBtn = document.getElementById('confirm-action');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => this.confirmAction());
        }
        
        const restartBtn = document.getElementById('restart-battle');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restartFromBattle());
        }
    }
};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    AIGameV2.init();
});

// 全局函数
window.AIGameV2 = AIGameV2;