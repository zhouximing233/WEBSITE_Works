/**
 * BKS官方网站 - 脚本文件
 * 优化版本：改进代码结构、性能和可读性
 */

// 角色数据管理模块
const CharacterManager = {
    characters: [
        // 前10个角色
        { id: 1, name: "神•龙禹臣", description: "BKS世界的创立者，拥有强大的智慧与思维，传说中能够创造世界的神秘存在，拥有近乎无限的力量。万神之主。", image: "images/characters/1.png", tags: ['运气','爆发','控制','创世'], stats: { 地主强度: 4, 农民强度: 4, 单挑强度: 4 } },
        { id: 2, name: "标•高嘉", description: "拥有无敌力量的肉坦。", image: "images/characters/2.png", tags: ['进攻'], stats: { 地主强度: 3, 农民强度: 2, 单挑强度: 2.5 } },
        { id: 3, name: "标•吕金泰", description: "掌握忠善之力的良民。", image: "images/characters/3.png", tags: ['均衡'], stats: { 地主强度: 2.5, 农民强度: 2.5, 单挑强度: 2 } },
        { id: 4, name: "神•李泽轩", description: "贝壳中掌管化学の神。", image: "images/characters/4.png", tags: ['进攻','爆发'], stats: { 地主强度: 4.5, 农民强度: 4.5, 单挑强度: 4.5 } },
        { id: 5, name: "标•宋承麟", description: "可爱小南梁。", image: "images/characters/5.png", tags: ['辅助'], stats: { 地主强度: 1.5, 农民强度: 2.5, 单挑强度: 2 } },
        { id: 6, name: "神•卢铭硕", description: "彭于晏。", image: "images/characters/6.png", tags: ['控制','进攻'], stats: { 地主强度: 4, 农民强度: 4, 单挑强度: 4 } },
        { id: 7, name: "标•赵子轩", description: "时运不济的少年。", image: "images/characters/7.png", tags: ['辅助'], stats: { 地主强度: 1, 农民强度: 3, 单挑强度: 0.5 } },
        { id: 8, name: "神•陈孟骐", description: "贝壳中掌管三角洲の神", image: "images/characters/8.png", tags: ['控制'], stats: { 地主强度: 4.5, 农民强度: 5, 单挑强度: 5 } },
        { id: 9, name: "标•周九焱", description: "America Boy。", image: "images/characters/9.png", tags: ['辅助'], stats: { 地主强度: 2.5, 农民强度: 3, 单挑强度: 2 } },
        { id: 10, name: "标•陈子睿", description: "贝壳足球一人之下万人之上的存在。", image: "images/characters/10.png", tags: ['控制'], stats: { 地主强度: 3, 农民强度: 3, 单挑强度: 3 } },
        // 第11-20个角色
        { id: 11, name: "标•耿习文", description: "战斗檄文。", image: "images/characters/11.png", tags: ['爆发','进攻'], stats: { 地主强度: 2.5, 农民强度: 3, 单挑强度: 2 } },
        { id: 12, name: "界•周九焱", description: "America Boy。", image: "images/characters/12.png", tags: ['辅助'], stats: { 地主强度: 2.5, 农民强度: 3.5, 单挑强度: 2 } },
        { id: 13, name: "界•耿习文", description: "战斗檄文。", image: "images/characters/13.png", tags: ['爆发','进攻'], stats: { 地主强度: 3.5, 农民强度: 3, 单挑强度: 3 } },
        { id: 14, name: "界•陈子睿", description: "贝壳足球一人之下万人之上的存在。", image: "images/characters/14.png", tags: ['爆发','进攻','控制'], stats: { 地主强度: 4.5, 农民强度: 3, 单挑强度: 4 } },
        { id: 15, name: "谋•陈孟骐", description: "游戏与人生你总得赢一个吧。", image: "images/characters/15.png", tags: ['辅助'], stats: { 地主强度: 100, 农民强度: 100, 单挑强度: 100 } },
        { id: 16, name: "谋•吕金泰", description: "虚弱の良民，有时候也会很善良。", image: "images/characters/16.png", tags: ['辅助'], stats: { 地主强度: 2, 农民强度: 3, 单挑强度: 3 } },
        { id: 17, name: "界•赵子轩", description: "你可能能够存活一会，但记得好好吃饭。", image: "images/characters/17.png", tags: ['辅助'], stats: { 地主强度: 3, 农民强度: 3.5, 单挑强度: 2.5 } },
        { id: 18, name: "界•高嘉", description: "纯粹的战士在战场上一定要躲开他。", image: "images/characters/18.png", tags: ['进攻','爆发'], stats: { 地主强度: 4, 农民强度: 3, 单挑强度: 3 } },
        { id: 19, name: "标•段一凡", description: "稍后处理。", image: "images/characters/19.png", tags: ['运气'], stats: { 地主强度: 2.5, 农民强度: 3, 单挑强度: 2.5 } },
        { id: 20, name: "界•段一凡", description: "先做小测。", image: "images/characters/20.png", tags: ['运气'], stats: { 地主强度: 3, 农民强度: 3.5, 单挑强度: 3 } },
        // 第21-30个角色
        { id: 21, name: "标•原浩为", description: "网络之上，万物玩弄于股掌之间。", image: "images/characters/21.png", tags: ['爆发'], stats: { 地主强度: 3, 农民强度: 2, 单挑强度: 2 } },
        { id: 22, name: "界•原浩为", description: "精通机械科技的角色，能够制造各种机械装置辅助战斗。", image: "images/characters/22.png", tags: ['爆发'], stats: { 地主强度: 3.5, 农民强度: 2.5, 单挑强度: 3 } },
        { id: 23, name: "界•宋承麟", description: "女生也可以很强大呢！", image: "images/characters/23.png", tags: ['控制'], stats: { 地主强度: 4, 农民强度: 3, 单挑强度: 3 } },
        { id: 24, name: "神•十党羽", description: "杂家上下打点，自要是费些银两！", image: "images/characters/24.png", tags: ['辅助', '爆发', '控制','进攻'], stats: { 地主强度: 5, 农民强度: 5, 单挑强度: 5 } },
        { id: 25, name: "谋•宋承麟", description: "在哪个平台直播？", image: "images/characters/25.png", tags: ['运气'], stats: { 地主强度: 4, 农民强度: 3, 单挑强度: 4 } },
        { id: 26, name: "神•高嘉", description: "贝壳中统御万民、大赦天下、全知全能の神。", image: "images/characters/26.png", tags: ['爆发','进攻'], stats: { 地主强度: 3, 农民强度: 4, 单挑强度: 3 } },
        { id: 27, name: "神•李坤鑫", description: "贝壳中掌管色欲の神。", image: "images/characters/27.png", tags: ['运气','控制'], stats: { 地主强度: 4.5, 农民强度: 4, 单挑强度: 4.5 } },
        { id: 28, name: "标•刘湛", description: "黑暗之中，难以发现我吧！", image: "images/characters/28.png", tags: ['控制'], stats: { 地主强度: 2.5, 农民强度: 4, 单挑强度: 3.5 } },
        { id: 29, name: "界•刘湛", description: " 走进黑暗，吾与汝同在！", image: "images/characters/29.png", tags: ['运气', '控制'], stats: { 地主强度: 3, 农民强度: 3.5, 单挑强度: 4 } },
        { id: 30, name: "标•朴圣起", description: "反弹！", image: "images/characters/30.png", tags: ['爆发'], stats: { 地主强度: 2.5, 农民强度: 2.5, 单挑强度: 3 } },
        // 第31-40个角色
        { id: 31, name: "界•朴圣起", description: "你刚刚说你有吃的了？对吧。", image: "images/characters/31.png", tags: ['爆发'], stats: { 地主强度: 3.5, 农民强度: 3.5, 单挑强度: 4 } },
        { id: 32, name: "神•朴圣起", description: "贝壳中掌管委婉の神。", image: "images/characters/32.png", tags: ['爆发','进攻'], stats: { 地主强度: 5, 农民强度: 5, 单挑强度: 4.5 } },
        { id: 33, name: "标•戴来", description: "帅气与速度的结合体。", image: "images/characters/33.png", tags: ['均衡'], stats: { 地主强度: 3, 农民强度: 3, 单挑强度: 3 } },
        { id: 34, name: "界•戴来", description: "我站在高原望北京，那里一切国泰安宁~", image: "images/characters/34.png", tags: ['均衡'], stats: { 地主强度: 4, 农民强度: 3, 单挑强度: 4 } },
        { id: 35, name: "标•陆驰岳", description: "I love China！！！", image: "images/characters/35.png", tags: ['控制'], stats: { 地主强度: 2, 农民强度: 2, 单挑强度: 2 } },
        { id: 36, name: "谋•陆驰岳", description: "What a beautiful gay。", image: "images/characters/36.png", tags: ['爆发','控制','进攻'], stats: { 地主强度: 4.5, 农民强度: 4.5 , 单挑强度: 4 } },
        { id: 37, name: "神•常翼", description: "梦回君处吾身前，梁亡长夜忆无眠。", image: "images/characters/37.png", tags: ['控制'], stats: { 地主强度: 4.5, 农民强度: 5, 单挑强度: 5 } },
        { id: 38, name: "标•张思睿", description: "老斯，李先听我所，他可能不似则个意思。", image: "images/characters/38.png", tags: ['控制'], stats: { 地主强度: 3, 农民强度: 2, 单挑强度: 2.5 } },
        { id: 39, name: "界•张思睿", description: "岑色的露。", image: "images/characters/39.png", tags: ['控制'], stats: { 地主强度: 3, 农民强度: 3, 单挑强度: 2.5 } },
        { id: 40, name: "标•刘睿辰", description: "我喜欢戴来❤。", image: "images/characters/40.png", tags: ['控制'], stats: { 地主强度: 2, 农民强度: 3, 单挑强度: 2.5 } },
        // 第41个角色
        { id: 41, name: "界•刘睿辰", description: "来，开把单！", image: "images/characters/41.png", tags: ['控制','进攻'], stats: { 地主强度: 2.5, 农民强度: 3.5, 单挑强度: 3 } }
    ],
    
    /**
     * 根据条件筛选角色
     * @param {string} searchText - 搜索文本
     * @param {string} filterTag - 筛选标签
     * @param {string} filterType - 筛选类型
     * @returns {Array} 筛选后的角色数组
     */
    filterCharacters(searchText, filterTag, filterType) {
        const searchLower = searchText.toLowerCase();
        
        return this.characters.filter(character => {
            // 按文本搜索
            const matchesSearch = searchText === '' || 
                character.name.toLowerCase().includes(searchLower) ||
                character.description.toLowerCase().includes(searchLower) ||
                character.tags.some(tag => tag.toLowerCase().includes(searchLower));
            
            // 按标签筛选
            let matchesTag = true;
            if (filterTag !== '') {
                if (filterType === 'series') {
                    // 按系列筛选
                    matchesTag = character.name.startsWith(filterTag + '•');
                } else {
                    // 按角色标签筛选
                    matchesTag = character.tags.includes(filterTag);
                }
            }
            
            return matchesSearch && matchesTag;
        });
    },
    
    /**
     * 获取角色总数
     * @returns {number} 角色总数
     */
    getTotalCount() {
        return this.characters.length;
    }
};

// UI管理模块
const UIManager = {
    // DOM元素缓存
    elements: {
        characterOption: null,
        easterOption: null,
        rulesOption: null,
        characterGrid: null,
        searchInput: null,
        clearSearchBtn: null,
        modal: null,
        modalTitle: null,
        modalImage: null,
        modalDescription: null,
        modalTags: null,
        welcomeSection: null,
        optionsGrid: null,
        charactersSection: null,
        easterSection: null,
        rulesSection: null
    },
    
    /**
     * 初始化DOM元素缓存
     */
    initElements() {
        this.elements.characterOption = document.getElementById('character-option');
        this.elements.easterOption = document.getElementById('easter-option');
        this.elements.rulesOption = document.getElementById('rules-option');
        this.elements.characterGrid = document.getElementById('character-grid');
        this.elements.searchInput = document.getElementById('search-input');
        this.elements.clearSearchBtn = document.getElementById('clear-search');
        this.elements.modal = document.getElementById('character-modal');
        this.elements.modalTitle = document.getElementById('modal-title');
        this.elements.modalImage = document.getElementById('modal-image');
        this.elements.modalDescription = document.getElementById('modal-description');
        this.elements.modalTags = document.getElementById('modal-tags');
        this.elements.welcomeSection = document.querySelector('.welcome-section');
        this.elements.optionsGrid = document.querySelector('.options-grid');
        this.elements.charactersSection = document.getElementById('characters');
        this.elements.easterSection = document.getElementById('easter-egg');
        this.elements.rulesSection = document.getElementById('game-rules');
    },
    
    /**
     * 显示元素
     * @param {HTMLElement} element - 要显示的元素
     */
    showElement(element) {
        if (element) element.classList.remove('hidden');
    },
    
    /**
     * 隐藏元素
     * @param {HTMLElement} element - 要隐藏的元素
     */
    hideElement(element) {
        if (element) element.classList.add('hidden');
    },
    
    /**
     * 切换元素显示状态
     * @param {HTMLElement} element - 要切换的元素
     */
    toggleElement(element) {
        if (element) element.classList.toggle('hidden');
    },
    
    /**
     * 显示角色图鉴区域
     */
    showCharacters() {
        this.hideElement(this.elements.welcomeSection);
        this.hideElement(this.elements.optionsGrid);
        this.hideElement(this.elements.rulesSection);
        this.hideElement(this.elements.easterSection);
        this.showElement(this.elements.charactersSection);
        
        // 重置搜索框
        if (this.elements.searchInput) {
            this.elements.searchInput.value = '';
            this.elements.searchInput.focus();
            this.updateClearButtonVisibility();
        }
    },
    
    /**
     * 显示彩蛋角色区域
     */
    showEasterEgg() {
        this.hideElement(this.elements.welcomeSection);
        this.hideElement(this.elements.optionsGrid);
        this.hideElement(this.elements.rulesSection);
        this.hideElement(this.elements.charactersSection);
        this.showElement(this.elements.easterSection);
    },
    
    /**
     * 显示游戏规则区域
     */
    showGameRules() {
        this.hideElement(this.elements.welcomeSection);
        this.hideElement(this.elements.optionsGrid);
        this.hideElement(this.elements.charactersSection);
        this.hideElement(this.elements.easterSection);
        this.showElement(this.elements.rulesSection);
    },
    
    /**
     * 隐藏当前显示的区域，返回首页
     * @param {string} sectionId - 要隐藏的区域ID
     */
    hideSection(sectionId) {
        const section = document.getElementById(sectionId);
        this.hideElement(section);
        this.showElement(this.elements.welcomeSection);
        this.showElement(this.elements.optionsGrid);
    },
    
    /**
     * 更新清除搜索按钮的可见性
     */
    updateClearButtonVisibility() {
        if (this.elements.searchInput && this.elements.clearSearchBtn) {
            this.elements.clearSearchBtn.style.display = 
                this.elements.searchInput.value ? 'flex' : 'none';
        }
    },
    
    /**
     * 重置筛选按钮状态
     */
    resetFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        const allBtn = document.querySelector('.filter-btn[data-tag=""]');
        if (allBtn) allBtn.classList.add('active');
    }
};

// 雷达图绘制模块
const RadarChart = {
    /**
     * 绘制三角形雷达图
     * @param {HTMLCanvasElement} canvas - 画布元素
     * @param {Object} stats - 统计数据
     */
    drawTriangle(canvas, stats) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.35;
        
        // 清空画布
        ctx.clearRect(0, 0, width, height);
        
        // 绘制网格三角形（5个同心三角形）
        this.drawGridTriangles(ctx, centerX, centerY, radius);
        
        // 绘制坐标轴线
        this.drawAxisLines(ctx, centerX, centerY, radius);
        
        // 计算数据点
        const dataPoints = this.calculateDataPoints(centerX, centerY, radius, stats);
        
        // 绘制数据区域
        this.drawDataArea(ctx, dataPoints);
        
        // 绘制数据点
        this.drawDataPoints(ctx, dataPoints);
        
        // 绘制标签
        this.drawLabels(ctx, centerX, centerY, radius, stats);
    },
    
    /**
     * 绘制网格三角形
     */
    drawGridTriangles(ctx, centerX, centerY, radius) {
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        
        for (let i = 1; i <= 5; i++) {
            const r = radius * (i / 5);
            ctx.beginPath();
            
            // 三个顶点坐标（顶、左、右）
            const topX = centerX;
            const topY = centerY - r;
            
            const leftX = centerX - r * Math.cos(Math.PI / 6);
            const leftY = centerY + r * Math.sin(Math.PI / 6);
            
            const rightX = centerX + r * Math.cos(Math.PI / 6);
            const rightY = centerY + r * Math.sin(Math.PI / 6);
            
            ctx.moveTo(topX, topY);
            ctx.lineTo(leftX, leftY);
            ctx.lineTo(rightX, rightY);
            ctx.closePath();
            ctx.stroke();
        }
    },
    
    /**
     * 绘制坐标轴线
     */
    drawAxisLines(ctx, centerX, centerY, radius) {
        ctx.strokeStyle = '#4a5568';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX, centerY - radius);
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX - radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
        ctx.stroke();
    },
    
    /**
     * 计算数据点坐标
     */
    calculateDataPoints(centerX, centerY, radius, stats) {
        const landLordValue = stats.地主强度 || 0;
        const farmerValue = stats.农民强度 || 0;
        const soloValue = stats.单挑强度 || 0;
        
        return {
            top: { x: centerX, y: centerY - radius * (landLordValue / 5) },
            left: { 
                x: centerX - radius * (farmerValue / 5) * Math.cos(Math.PI / 6), 
                y: centerY + radius * (farmerValue / 5) * Math.sin(Math.PI / 6) 
            },
            right: { 
                x: centerX + radius * (soloValue / 5) * Math.cos(Math.PI / 6), 
                y: centerY + radius * (soloValue / 5) * Math.sin(Math.PI / 6) 
            },
            values: { landLordValue, farmerValue, soloValue }
        };
    },
    
    /**
     * 绘制数据区域
     */
    drawDataArea(ctx, dataPoints) {
        ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
        ctx.beginPath();
        ctx.moveTo(dataPoints.top.x, dataPoints.top.y);
        ctx.lineTo(dataPoints.left.x, dataPoints.left.y);
        ctx.lineTo(dataPoints.right.x, dataPoints.right.y);
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(dataPoints.top.x, dataPoints.top.y);
        ctx.lineTo(dataPoints.left.x, dataPoints.left.y);
        ctx.lineTo(dataPoints.right.x, dataPoints.right.y);
        ctx.closePath();
        ctx.stroke();
    },
    
    /**
     * 绘制数据点
     */
    drawDataPoints(ctx, dataPoints) {
        ctx.fillStyle = '#667eea';
        
        [dataPoints.top, dataPoints.left, dataPoints.right].forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
            ctx.fill();
        });
    },
    
    /**
     * 绘制标签
     */
    drawLabels(ctx, centerX, centerY, radius, stats) {
        ctx.fillStyle = '#4a5568';
        ctx.font = 'bold 14px Microsoft YaHei';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // 地主强度标签
        ctx.fillText(`地主强度: ${stats.地主强度 || 0}`, centerX, centerY - radius - 20);
        
        // 农民强度标签
        ctx.save();
        ctx.translate(centerX - radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
        ctx.rotate(-Math.PI / 3);
        ctx.fillText(`农民强度: ${stats.农民强度 || 0}`, 0, -20);
        ctx.restore();
        
        // 单挑强度标签
        ctx.save();
        ctx.translate(centerX + radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
        ctx.rotate(Math.PI / 3);
        ctx.fillText(`单挑强度: ${stats.单挑强度 || 0}`, 0, -20);
        ctx.restore();
    }
};

// 主应用控制器
const AppController = {
    searchTimeout: null,
    currentActiveFilter: null,
    
    // ==== 第三种解决方案：手动指定所有统计角色的配置对象 ====
    statsConfig: {
        popularCharacterId: 1,     // 最受欢迎角色ID - 神•龙禹臣
        weakestCharacterId: 7,     // 最路边角色ID - 标•赵子轩
        strongestCharacterId: 15,  // 最强势角色ID - 谋•陈孟骐
        winrateCharacterId: 24     // 胜率最高角色ID - 神•十党羽
    },
    
    /**
     * 初始化应用
     */
    init() {
        console.log('BKS官方网站初始化...');
        
        // 初始化UI管理器
        UIManager.initElements();
        
        // 设置事件监听器
        this.setupEventListeners();
        
        // 初始加载角色网格
        this.loadCharacterGrid();
        
        // 初始化统计区域
        this.initStatsSection();
        
        console.log('应用初始化完成');
    },
    
    /**
     * 设置事件监听器
     */
    setupEventListeners() {
        // 角色图鉴点击事件
        if (UIManager.elements.characterOption) {
            UIManager.elements.characterOption.addEventListener('click', (e) => {
                e.preventDefault();
                UIManager.showCharacters();
                this.resetFilters();
            });
        }
        
        // 彩蛋角色点击事件
        if (UIManager.elements.easterOption) {
            UIManager.elements.easterOption.addEventListener('click', (e) => {
                e.preventDefault();
                UIManager.showEasterEgg();
            });
        }
        
        // 游戏规则点击事件
        if (UIManager.elements.rulesOption) {
            UIManager.elements.rulesOption.addEventListener('click', (e) => {
                e.preventDefault();
                UIManager.showGameRules();
            });
        }
        
        // 搜索框事件
        this.setupSearchEvents();
        
        // 筛选按钮事件
        this.setupFilterEvents();
        
        // 模态框事件
        this.setupModalEvents();
        
        // 全局键盘事件
        document.addEventListener('keydown', this.handleGlobalKeydown.bind(this));
    },
    
    /**
     * 设置搜索相关事件
     */
    setupSearchEvents() {
        if (!UIManager.elements.searchInput || !UIManager.elements.clearSearchBtn) return;
        
        // 搜索输入事件（添加防抖）
        UIManager.elements.searchInput.addEventListener('input', () => {
            UIManager.updateClearButtonVisibility();
            
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.loadCharacterGrid();
            }, 300);
        });
        
        // 回车键搜索
        UIManager.elements.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.loadCharacterGrid();
            }
        });
        
        // 清除搜索
        UIManager.elements.clearSearchBtn.addEventListener('click', () => {
            UIManager.elements.searchInput.value = '';
            this.loadCharacterGrid();
            UIManager.elements.searchInput.focus();
            UIManager.updateClearButtonVisibility();
        });
    },
    
    /**
     * 设置筛选事件
     */
    setupFilterEvents() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // 给当前按钮添加active类
                button.classList.add('active');
                
                this.loadCharacterGrid();
            });
        });
    },
    
    /**
     * 设置模态框事件
     */
    setupModalEvents() {
        // 点击模态框背景关闭
        UIManager.elements.modal.addEventListener('click', (e) => {
            if (e.target === UIManager.elements.modal) {
                this.closeModal();
            }
        });
    },
    
    /**
     * 处理全局键盘事件
     */
    handleGlobalKeydown(e) {
        if (e.key === 'Escape') {
            this.closeModal();
        }
    },
    
    /**
     * 重置筛选条件
     */
    resetFilters() {
        UIManager.resetFilterButtons();
        this.loadCharacterGrid();
    },
    
    /**
     * 加载角色网格
     */
    loadCharacterGrid() {
        const grid = UIManager.elements.characterGrid;
        if (!grid) return;
        
        // 清空网格
        grid.innerHTML = '';
        
        // 获取搜索和筛选条件
        const searchText = UIManager.elements.searchInput ? 
            UIManager.elements.searchInput.value.toLowerCase() : '';
        const activeFilterBtn = document.querySelector('.filter-btn.active');
        const filterTag = activeFilterBtn ? activeFilterBtn.getAttribute('data-tag') || '' : '';
        const filterType = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter-type') || '' : '';
        
        // 筛选角色
        const filteredCharacters = CharacterManager.filterCharacters(searchText, filterTag, filterType);
        
        if (filteredCharacters.length > 0) {
            // 添加角色卡片
            filteredCharacters.forEach(character => {
                grid.appendChild(this.createCharacterCard(character));
            });
            
            // 如果没有搜索条件，添加"敬请期待"卡片
            if (searchText === '' && filterTag === '') {
                grid.appendChild(this.createComingSoonCard());
            }
        } else {
            // 显示无结果提示
            grid.appendChild(this.createNoResultsCard());
        }
    },
    
    /**
     * 创建角色卡片
     */
    createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}" 
                 onerror="this.src='https://placehold.co/180x200/667eea/ffffff?text=${encodeURIComponent(character.name)}'">
            <div class="character-info">
                <h3>${character.name}</h3>
                <div class="character-tags">
                    ${character.tags.map(tag => `<span class="character-tag">${tag}</span>`).join('')}
                </div>
                <p class="character-description">${character.description}</p>
            </div>
        `;
        card.addEventListener('click', () => this.showCharacterDetail(character));
        return card;
    },
    
    /**
     * 创建敬请期待卡片
     */
    createComingSoonCard() {
        const card = document.createElement('div');
        card.className = 'character-card coming-soon-card';
        card.innerHTML = `
            <div class="coming-soon-placeholder">
                <i class="fas fa-clock"></i>
                <h3>敬请期待</h3>
                <p>新角色开发中</p>
            </div>
        `;
        return card;
    },
    
    /**
     * 创建无结果提示卡片
     */
    createNoResultsCard() {
        const card = document.createElement('div');
        card.className = 'no-results';
        card.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search"></i>
                <h3>未找到匹配的角色</h3>
                <p>请尝试不同的搜索关键词或筛选条件</p>
            </div>
        `;
        return card;
    },
    
    /**
     * 显示角色详情
     */
    showCharacterDetail(character) {
        console.log('显示角色详情:', character.name);
        
        // 更新模态框内容
        UIManager.elements.modalTitle.textContent = character.name;
        UIManager.elements.modalImage.src = character.image;
        UIManager.elements.modalImage.onerror = () => {
            UIManager.elements.modalImage.src = `https://placehold.co/400x600/667eea/ffffff?text=${encodeURIComponent(character.name)}`;
        };
        UIManager.elements.modalDescription.textContent = character.description;
        
        // 更新标签
        UIManager.elements.modalTags.innerHTML = '';
        character.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            UIManager.elements.modalTags.appendChild(span);
        });
        
        // 创建雷达图
        this.createRadarChart(character);
        
        // 显示模态框
        UIManager.showElement(UIManager.elements.modal);
    },
    
    /**
     * 创建雷达图
     */
    createRadarChart(character) {
        const statsContainer = document.querySelector('.stats');
        statsContainer.innerHTML = `
            <div class="radar-container">
                <h3>能力评估</h3>
                <div class="radar-wrapper">
                    <canvas id="radar-chart" width="400" height="400"></canvas>
                </div>
                <div class="score-summary">
                    <p>总分: <span class="total-score">
                        ${(character.stats.地主强度 || 0) + (character.stats.农民强度 || 0) + (character.stats.单挑强度 || 0)}/15
                    </span></p>
                </div>
            </div>
        `;
        
        // 绘制雷达图
        setTimeout(() => {
            const canvas = document.getElementById('radar-chart');
            if (canvas && character.stats) {
                RadarChart.drawTriangle(canvas, character.stats);
            }
        }, 50);
    },
    
    /**
     * 显示彩蛋详情
     */
    showEasterDetail(name, description, image) {
        console.log('显示彩蛋详情:', name);
        
        UIManager.elements.modalTitle.textContent = name;
        UIManager.elements.modalImage.src = image;
        UIManager.elements.modalImage.onerror = () => {
            UIManager.elements.modalImage.src = 'https://placehold.co/400x400/667eea/ffffff?text=彩蛋';
        };
        UIManager.elements.modalDescription.textContent = description;
        UIManager.elements.modalTags.innerHTML = '<span class="tag">彩蛋</span>';
        
        const statsContainer = document.querySelector('.stats');
        statsContainer.innerHTML = '<h3>状态</h3><p>敬请期待，正在开发中...</p>';
        
        UIManager.showElement(UIManager.elements.modal);
    },
    
    /**
     * 关闭模态框
     */
    closeModal() {
        console.log('关闭模态框');
        UIManager.hideElement(UIManager.elements.modal);
    },
    
    // ==== 第三种解决方案：基于配置对象的统计方法 ====
    /**
     * 统计角色数据 - 基于配置对象
     */
    getPopularCharacter() {
        return CharacterManager.characters.find(char => char.id === this.statsConfig.popularCharacterId);
    },
    
    getWeakestCharacter() {
        return CharacterManager.characters.find(char => char.id === this.statsConfig.weakestCharacterId);
    },
    
    getStrongestCharacter() {
        return CharacterManager.characters.find(char => char.id === this.statsConfig.strongestCharacterId);
    },
    
    getHighestWinrateCharacter() {
        return CharacterManager.characters.find(char => char.id === this.statsConfig.winrateCharacterId);
    },
    
    /**
     * 初始化统计区域
     */
    initStatsSection() {
        // 获取统计角色
        const popularChar = this.getPopularCharacter();
        const weakestChar = this.getWeakestCharacter();
        const strongestChar = this.getStrongestCharacter();
        const winrateChar = this.getHighestWinrateCharacter();
        
        // 更新显示
        const popularElement = document.getElementById('popular-character-name');
        const weakestElement = document.getElementById('weakest-character-name');
        const strongestElement = document.getElementById('strongest-character-name');
        const winrateElement = document.getElementById('winrate-character-name');
        
        if (popularElement) popularElement.textContent = popularChar?.name || '未知';
        if (weakestElement) weakestElement.textContent = weakestChar?.name || '未知';
        if (strongestElement) strongestElement.textContent = strongestChar?.name || '未知';
        if (winrateElement) winrateElement.textContent = winrateChar?.name || '未知';
    },
    
    /**
     * 显示统计角色详情
     */
    showPopularCharacter() {
        const character = this.getPopularCharacter();
        if (character) this.showCharacterDetail(character);
    },
    
    showWeakestCharacter() {
        const character = this.getWeakestCharacter();
        if (character) this.showCharacterDetail(character);
    },
    
    showStrongestCharacter() {
        const character = this.getStrongestCharacter();
        if (character) this.showCharacterDetail(character);
    },
    
    showHighestWinrateCharacter() {
        const character = this.getHighestWinrateCharacter();
        if (character) this.showCharacterDetail(character);
    },
    
    // ==== 额外功能：动态修改统计配置的方法 ====
    /**
     * 更新统计配置
     * @param {Object} newConfig - 新的统计配置
     */
    updateStatsConfig(newConfig) {
        if (newConfig.popularCharacterId !== undefined) {
            this.statsConfig.popularCharacterId = newConfig.popularCharacterId;
        }
        if (newConfig.weakestCharacterId !== undefined) {
            this.statsConfig.weakestCharacterId = newConfig.weakestCharacterId;
        }
        if (newConfig.strongestCharacterId !== undefined) {
            this.statsConfig.strongestCharacterId = newConfig.strongestCharacterId;
        }
        if (newConfig.winrateCharacterId !== undefined) {
            this.statsConfig.winrateCharacterId = newConfig.winrateCharacterId;
        }
        
        // 更新显示
        this.initStatsSection();
        console.log('统计配置已更新:', this.statsConfig);
    },
    
    /**
     * 获取当前统计配置
     * @returns {Object} 当前统计配置
     */
    getStatsConfig() {
        return {...this.statsConfig}; // 返回副本
    }
};

// DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    AppController.init();
});

// 全局辅助函数
window.showEasterDetail = AppController.showEasterDetail.bind(AppController);
window.hideSection = UIManager.hideSection.bind(UIManager);
window.closeModal = AppController.closeModal.bind(AppController);
window.showPopularCharacter = AppController.showPopularCharacter.bind(AppController);
window.showWeakestCharacter = AppController.showWeakestCharacter.bind(AppController);
window.showStrongestCharacter = AppController.showStrongestCharacter.bind(AppController);
window.showHighestWinrateCharacter = AppController.showHighestWinrateCharacter.bind(AppController);

// ==== 第三种解决方案的额外全局函数 ====
/**
 * 获取当前统计配置（用于调试）
 * @returns {Object} 统计配置
 */
window.getStatsConfig = () => {
    console.log('当前统计配置:', AppController.getStatsConfig());
    return AppController.getStatsConfig();
};

/**
 * 更新统计配置（用于动态修改）
 * @param {Object} config - 新的配置对象
 */
window.updateStatsConfig = (config) => {
    AppController.updateStatsConfig(config);
};

/**
 * 快速修改统计角色（简化版）
 * @param {string} type - 统计类型: 'popular'|'weakest'|'strongest'|'winrate'
 * @param {number} characterId - 角色ID
 */
window.setStatCharacter = (type, characterId) => {
    const configMap = {
        'popular': 'popularCharacterId',
        'weakest': 'weakestCharacterId',
        'strongest': 'strongestCharacterId',
        'winrate': 'winrateCharacterId'
    };
    
    const configKey = configMap[type];
    if (configKey) {
        AppController.updateStatsConfig({ [configKey]: characterId });
    } else {
        console.error('无效的统计类型:', type);
    }
};