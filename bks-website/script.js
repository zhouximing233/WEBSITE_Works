// 详细的角色数据（41个角色），已修改为新的属性系统
const characters = [
    // 前10个角色
    {
        id: 1,
        name: "神•龙禹臣",
        description: "BKS世界的创立者，拥有强大的智慧与思维，传说中能够创造世界的神秘存在，拥有近乎无限的力量。万神之主。",
        image: "images/characters/1.png",
        tags: ['运气','爆发','控制','创世'],
        stats: {
            地主强度: 4,
            农民强度: 4,
            单挑强度: 4
        }
    },
    {
        id: 2,
        name: "标•高嘉",
        description: "拥有无敌力量的肉坦。",
        image: "images/characters/2.png",
        tags: ['进攻'],
        stats: {
            地主强度: 3,
            农民强度: 2,
            单挑强度: 2.5
        }
    },
    {
        id: 3,
        name: "标•吕金泰",
        description: "掌握忠善之力的良民。",
        image: "images/characters/3.png",
        tags: ['均衡'],
        stats: {
            地主强度: 2.5,
            农民强度: 2.5,
            单挑强度: 2
        }
    },
    {
        id: 4,
        name: "神•李泽轩",
        description: "贝壳中掌管化学の神。",
        image: "images/characters/4.png",
        tags: ['进攻','爆发'],
        stats: {
            地主强度: 4.5,
            农民强度: 4.5,
            单挑强度: 4.5
        }
    },
    {
        id: 5,
        name: "标•宋承麟",
        description: "可爱小南梁。",
        image: "images/characters/5.png",
        tags: ['辅助'],
        stats: {
            地主强度: 1.5,
            农民强度: 2.5,
            单挑强度: 2
        }
    },
    {
        id: 6,
        name: "神•卢铭硕",
        description: "彭于晏。",
        image: "images/characters/6.png",
        tags: ['控制','进攻'],
        stats: {
            地主强度: 4,
            农民强度: 4,
            单挑强度: 4
        }
    },
    {
        id: 7,
        name: "标•赵子轩",
        description: "时运不济的少年。",
        image: "images/characters/7.png",
        tags: ['辅助'],
        stats: {
            地主强度: 1,
            农民强度: 3,
            单挑强度: 0.5
        }
    },
    {
        id: 8,
        name: "神•陈孟骐",
        description: "贝壳中掌管三角洲の神",
        image: "images/characters/8.png",
        tags: ['控制'],
        stats: {
            地主强度: 4.5,
            农民强度: 5,
            单挑强度: 5
        }
    },
    {
        id: 9,
        name: "标•周九焱",
        description: "America Boy。",
        image: "images/characters/9.png",
        tags: ['辅助'],
        stats: {
            地主强度: 2.5,
            农民强度: 3,
            单挑强度: 2
        }
    },
    {
        id: 10,
        name: "标•陈子睿",
        description: "贝壳足球一人之下万人之上的存在。",
        image: "images/characters/10.png",
        tags: ['控制'],
        stats: {
            地主强度: 3,
            农民强度: 3,
            单挑强度: 3
        }
    },
    // 第11-20个角色
    {
        id: 11,
        name: "标•耿习文",
        description: "战斗檄文。",
        image: "images/characters/11.png",
        tags: ['爆发','进攻'],
        stats: {
            地主强度: 2.5,
            农民强度: 3,
            单挑强度: 2
        }
    },
    {
        id: 12,
        name: "界•周九焱",
        description: "America Boy。",
        image: "images/characters/12.png",
        tags: ['辅助'],
        stats: {
            地主强度: 2.5,
            农民强度: 3.5,
            单挑强度: 2
        }
    },
    {
        id: 13,
        name: "界•耿习文",
        description: "战斗檄文。",
        image: "images/characters/13.png",
        tags: ['爆发','进攻'],
        stats: {
            地主强度: 3.5,
            农民强度: 3,
            单挑强度: 3
        }
    },
    {
        id: 14,
        name: "界•陈子睿",
        description: "贝壳足球一人之下万人之上的存在。",
        image: "images/characters/14.png",
        tags: ['爆发','进攻','控制'],
        stats: {
            地主强度: 4.5,
            农民强度: 3,
            单挑强度: 4
        }
    },
    {
        id: 15,
        name: "谋•陈孟骐",
        description: "游戏与人生你总得赢一个吧。",
        image: "images/characters/15.png",
        tags: ['辅助'],
        stats: {
            地主强度: 100,
            农民强度: 100,
            单挑强度: 100
        }
    },
    {
        id: 16,
        name: "谋•吕金泰",
        description: "虚弱の良民，有时候也会很善良。",
        image: "images/characters/16.png",
        tags: ['辅助'],
        stats: {
            地主强度: 2,
            农民强度: 3,
            单挑强度: 3
        }
    },
    {
        id: 17,
        name: "界•赵子轩",
        description: "你可能能够存活一会，但记得好好吃饭。",
        image: "images/characters/17.png",
        tags: ['辅助'],
        stats: {
            地主强度: 3,
            农民强度: 3.5,
            单挑强度: 2.5
        }
    },
    {
        id: 18,
        name: "界•高嘉",
        description: "纯粹的战士在战场上一定要躲开他。",
        image: "images/characters/18.png",
        tags: ['进攻','爆发'],
        stats: {
            地主强度: 4,
            农民强度: 3,
            单挑强度: 3
        }
    },
    {
        id: 19,
        name: "标•段一凡",
        description: "稍后处理。",
        image: "images/characters/19.png",
        tags: ['运气'],
        stats: {
            地主强度: 2.5,
            农民强度: 3,
            单挑强度: 2.5
        }
    },
    {
        id: 20,
        name: "界•段一凡",
        description: "先做小测。",
        image: "images/characters/20.png",
        tags: ['运气'],
        stats: {
            地主强度: 3,
            农民强度: 3.5,
            单挑强度: 3
        }
    },
    // 第21-30个角色
    {
        id: 21,
        name: "标•原浩为",
        description: "网络之上，万物玩弄于股掌之间。",
        image: "images/characters/21.png",
        tags: ['爆发'],
        stats: {
            地主强度: 3,
            农民强度: 2,
            单挑强度: 2
        }
    },
    {
        id: 22,
        name: "界•原浩为",
        description: "精通机械科技的角色，能够制造各种机械装置辅助战斗。",
        image: "images/characters/22.png",
        tags: ['爆发'],
        stats: {
            地主强度: 3.5,
            农民强度: 2.5,
            单挑强度: 3
        }
    },
    {
        id: 23,
        name: "界•宋承麟",
        description: "女生也可以很强大呢！",
        image: "images/characters/23.png",
        tags: ['控制'],
        stats: {
            地主强度: 4,
            农民强度: 3,
            单挑强度: 3
        }
    },
    {
        id: 24,
        name: "神•十党羽",
        description: "杂家上下打点，自要是费些银两！",
        image: "images/characters/24.png",
        tags: ['辅助', '爆发', '控制','进攻'],
        stats: {
            地主强度: 5,
            农民强度: 5,
            单挑强度: 5
        }
    },
    {
        id: 25,
        name: "谋•宋承麟",
        description: "在哪个平台直播？",
        image: "images/characters/25.png",
        tags: ['运气'],
        stats: {
            地主强度: 4,
            农民强度: 3,
            单挑强度: 4
        }
    },
    {
        id: 26,
        name: "神•高嘉",
        description: "贝壳中统御万民、大赦天下、全知全能の神。",
        image: "images/characters/26.png",
        tags: ['爆发','进攻'],
        stats: {
            地主强度: 3,
            农民强度: 4,
            单挑强度: 3
        }
    },
    {
        id: 27,
        name: "神•李坤鑫",
        description: "贝壳中掌管色欲の神。",
        image: "images/characters/27.png",
        tags: ['运气','控制'],
        stats: {
            地主强度: 2,
            农民强度: 5,
            单挑强度: 1
        }
    },
    {
        id: 28,
        name: "标•刘湛",
        description: "黑暗之中，难以发现我吧！",
        image: "images/characters/28.png",
        tags: ['控制'],
        stats: {
            地主强度: 2.5,
            农民强度: 4,
            单挑强度: 3.5
        }
    },
    {
        id: 29,
        name: "界•刘湛",
        description: " 走进黑暗，吾与汝同在！",
        image: "images/characters/29.png",
        tags: ['运气', '控制'],
        stats: {
            地主强度: 3,
            农民强度: 3.5,
            单挑强度: 4
        }
    },
    {
        id: 30,
        name: "标•朴圣起",
        description: "反弹！",
        image: "images/characters/30.png",
        tags: ['爆发'],
        stats: {
            地主强度: 2.5,
            农民强度: 2.5,
            单挑强度: 3
        }
    },
    // 第31-40个角色
    {
        id: 31,
        name: "界•朴圣起",
        description: "你刚刚说你有吃的了？对吧。",
        image: "images/characters/31.png",
        tags: ['爆发'],
        stats: {
            地主强度: 3.5,
            农民强度: 3.5,
            单挑强度: 4
        }
    },
    {
        id: 32,
        name: "神•朴圣起",
        description: "贝壳中掌管委婉の神。",
        image: "images/characters/32.png",
        tags: ['爆发','进攻'],
        stats: {
            地主强度: 5,
            农民强度: 5,
            单挑强度: 4.5
        }
    },
    {
        id: 33,
        name: "标•戴来",
        description: "帅气与速度的结合体。",
        image: "images/characters/33.png",
        tags: ['均衡'],
        stats: {
            地主强度: 3,
            农民强度: 3,
            单挑强度: 3
        }
    },
    {
        id: 34,
        name: "界•戴来",
        description: "我站在高原望北京，那里一切国泰安宁~",
        image: "images/characters/34.png",
        tags: ['均衡'],
        stats: {
            地主强度: 4,
            农民强度: 3,
            单挑强度: 4
        }
    },
    {
        id: 35,
        name: "标•陆驰岳",
        description: "I love China！！！",
        image: "images/characters/35.png",
        tags: ['控制'],
        stats: {
            地主强度: 2,
            农民强度: 2,
            单挑强度: 2
        }
    },
    {
        id: 36,
        name: "谋•陆驰岳",
        description: "What a beautiful gay。",
        image: "images/characters/36.png",
        tags: ['爆发','控制','进攻'],
        stats: {
            地主强度: 4.5,
            农民强度: 4.5 ,
            单挑强度: 4
        }
    },
    {
        id: 37,
        name: "神•常翼",
        description: "梦回君处吾身前，梁亡长夜忆无眠。",
        image: "images/characters/37.png",
        tags: ['控制'],
        stats: {
            地主强度: 4.5,
            农民强度: 5,
            单挑强度: 5
        }
    },
    {
        id: 38,
        name: "标•张思睿",
        description: "老斯，李先听我所，他可能不似则个意思。",
        image: "images/characters/38.png",
        tags: ['控制'],
        stats: {
            地主强度: 3,
            农民强度: 2,
            单挑强度: 2.5
        }
    },
    {
        id: 39,
        name: "界•张思睿",
        description: "岑色的露。",
        image: "images/characters/39.png",
        tags: ['控制'],
        stats: {
            地主强度: 3,
            农民强度: 3,
            单挑强度: 2.5
        }
    },
    {
        id: 40,
        name: "标•刘睿辰",
        description: "我喜欢戴来❤。",
        image: "images/characters/40.png",
        tags: ['控制'],
        stats: {
            地主强度: 2,
            农民强度: 3,
            单挑强度: 2.5
        }
    },
    // 第41个角色
    {
        id: 41,
        name: "界•刘睿辰",
        description: "来，开把单！",
        image: "images/characters/41.png",
        tags: ['控制','进攻'],
        stats: {
            地主强度: 2.5,
            农民强度: 3.5,
            单挑强度: 3
        }
    }
];

const easterEggs = [
    {
        id: 1,
        name: "彩蛋角色1",
        description: "这是一个神秘的彩蛋角色，将在未来版本中揭晓更多信息...",
        image: "images/easter/egg1.png"
    },
    {
        id: 2,
        name: "彩蛋角色2", 
        description: "另一个隐藏角色，正在设计中，敬请期待...",
        image: "images/easter/egg2.png"
    }
];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM加载完成");
    
    // 角色图鉴点击事件
    document.getElementById('character-option').addEventListener('click', function(e) {
        e.preventDefault();
        console.log("点击角色图鉴");
        showCharacters();
    });

    // 彩蛋角色点击事件  
    document.getElementById('easter-option').addEventListener('click', function(e) {
        e.preventDefault();
        console.log("点击彩蛋角色");
        showEasterEgg();
    });

    // 设置搜索和筛选事件
    setupSearchEvents();
    
    // 初始加载全部角色（隐藏状态下）
    initCharacterGrid();
});

// 显示角色图鉴
function showCharacters() {
    console.log("显示角色图鉴");
    document.querySelector('.welcome-section').classList.add('hidden');
    document.querySelector('.options-grid').classList.add('hidden');
    document.getElementById('characters').classList.remove('hidden');
    
    // 重置搜索框
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        updateClearButtonVisibility();
    }
    
    // 重置筛选按钮
    resetFilterButtons();
    
    // 重新初始化角色网格
    initCharacterGrid();
}

// 显示彩蛋角色
function showEasterEgg() {
    console.log("显示彩蛋角色");
    document.querySelector('.welcome-section').classList.add('hidden');
    document.querySelector('.options-grid').classList.add('hidden');
    document.getElementById('easter-egg').classList.remove('hidden');
}

// 隐藏当前显示的部分
function hideSection(sectionId) {
    console.log("隐藏部分:", sectionId);
    document.getElementById(sectionId).classList.add('hidden');
    document.querySelector('.welcome-section').classList.remove('hidden');
    document.querySelector('.options-grid').classList.remove('hidden');
}

// 初始化角色网格
function initCharacterGrid() {
    console.log("初始化角色网格");
    const grid = document.getElementById('character-grid');
    
    if (!grid) {
        console.error("找不到character-grid元素");
        return;
    }
    
    // 清空网格
    grid.innerHTML = '';
    
    // 获取搜索框元素
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput ? searchInput.value.toLowerCase() : '';
    
    // 获取当前激活的筛选按钮
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    let filterTag = '';
    let filterType = '';
    
    if (activeFilterBtn) {
        filterTag = activeFilterBtn.getAttribute('data-tag') || '';
        filterType = activeFilterBtn.getAttribute('data-filter-type') || '';
    }
    
    console.log("搜索文本:", searchText, "筛选标签:", filterTag, "筛选类型:", filterType);
    
    // 筛选角色
    const filteredCharacters = characters.filter(character => {
        // 按文本搜索
        const matchesSearch = searchText === '' || 
            character.name.toLowerCase().includes(searchText) ||
            character.description.toLowerCase().includes(searchText) ||
            character.tags.some(tag => tag.toLowerCase().includes(searchText));
        
        // 按标签筛选
        let matchesTag = true;
        if (filterTag !== '') {
            if (filterType === 'series') {
                // 按系列筛选：检查角色名称是否以指定系列开头
                matchesTag = character.name.startsWith(filterTag + '•');
            } else {
                // 按角色标签筛选
                matchesTag = character.tags.includes(filterTag);
            }
        }
        
        return matchesSearch && matchesTag;
    });
    
    console.log("筛选后的角色数量:", filteredCharacters.length);
    
    // 添加筛选后的角色卡片
    if (filteredCharacters.length > 0) {
        filteredCharacters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}" 
                     onerror="this.src='https://placehold.co/180x200/667eea/ffffff?text=${character.name}'">
                <div class="character-info">
                    <h3>${character.name}</h3>
                    <div class="character-tags">
                        ${character.tags.map(tag => `<span class="character-tag">${tag}</span>`).join('')}
                    </div>
                    <p class="character-description">${character.description}</p>
                </div>
            `;
            card.addEventListener('click', () => showCharacterDetail(character));
            grid.appendChild(card);
        });
        
        // 如果没有搜索条件，添加"敬请期待"卡片
        if (searchText === '' && filterTag === '') {
            const comingSoonCard = document.createElement('div');
            comingSoonCard.className = 'character-card coming-soon-card';
            comingSoonCard.innerHTML = `
                <div class="coming-soon-placeholder">
                    <i class="fas fa-clock"></i>
                    <h3>敬请期待</h3>
                    <p>新角色开发中</p>
                </div>
            `;
            grid.appendChild(comingSoonCard);
        }
    } else {
        // 如果没有匹配的角色，显示提示信息
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search"></i>
                <h3>未找到匹配的角色</h3>
                <p>请尝试不同的搜索关键词或筛选条件</p>
            </div>
        `;
        grid.appendChild(noResults);
    }
}

// 设置搜索框事件
function setupSearchEvents() {
    console.log("设置搜索事件");
    
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!searchInput) {
        console.error("找不到search-input元素");
        return;
    }
    
    // 输入搜索（添加防抖）
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        console.log("搜索输入:", this.value);
        
        // 更新清除按钮可见性
        updateClearButtonVisibility();
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            console.log("执行搜索");
            initCharacterGrid();
        }, 300); // 300ms防抖
    });
    
    // 回车键搜索
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            console.log("按Enter键搜索");
            initCharacterGrid();
        }
    });
    
    // 清除搜索
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            console.log("清除搜索");
            searchInput.value = '';
            initCharacterGrid();
            searchInput.focus();
            updateClearButtonVisibility();
        });
    }
    
    // 筛选按钮点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("点击筛选按钮:", this.textContent, "标签:", this.getAttribute('data-tag'), "类型:", this.getAttribute('data-filter-type'));
            
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');
            
            initCharacterGrid();
        });
    });
    
    // 初始更新清除按钮可见性
    updateClearButtonVisibility();
}

// 更新清除按钮可见性
function updateClearButtonVisibility() {
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    
    if (searchInput && clearSearchBtn) {
        clearSearchBtn.style.display = searchInput.value ? 'flex' : 'none';
    }
}

// 重置筛选按钮
function resetFilterButtons() {
    console.log("重置筛选按钮");
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 激活"全部角色"按钮
        const allBtn = document.querySelector('.filter-btn[data-tag=""]');
        if (allBtn) {
            allBtn.classList.add('active');
        }
    }
}

// 绘制三角形雷达图
function drawTriangleRadar(canvas, stats) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;
    
    // 清空画布
    ctx.clearRect(0, 0, width, height);
    
    // 绘制网格三角形（5个同心三角形）
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
    
    // 绘制坐标轴线
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 2;
    
    // 三条坐标轴
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius);
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
    ctx.stroke();
    
    // 计算数据点（将0-5分映射到半径）
    const landLordValue = stats.地主强度 || 0;
    const farmerValue = stats.农民强度 || 0;
    const soloValue = stats.单挑强度 || 0;
    
    // 三个数据点坐标
    const dataTopX = centerX;
    const dataTopY = centerY - radius * (landLordValue / 5);
    
    const dataLeftX = centerX - radius * (farmerValue / 5) * Math.cos(Math.PI / 6);
    const dataLeftY = centerY + radius * (farmerValue / 5) * Math.sin(Math.PI / 6);
    
    const dataRightX = centerX + radius * (soloValue / 5) * Math.cos(Math.PI / 6);
    const dataRightY = centerY + radius * (soloValue / 5) * Math.sin(Math.PI / 6);
    
    // 绘制数据区域（填充）
    ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
    ctx.beginPath();
    ctx.moveTo(dataTopX, dataTopY);
    ctx.lineTo(dataLeftX, dataLeftY);
    ctx.lineTo(dataRightX, dataRightY);
    ctx.closePath();
    ctx.fill();
    
    // 绘制数据区域边框
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(dataTopX, dataTopY);
    ctx.lineTo(dataLeftX, dataLeftY);
    ctx.lineTo(dataRightX, dataRightY);
    ctx.closePath();
    ctx.stroke();
    
    // 绘制数据点
    ctx.fillStyle = '#667eea';
    
    // 地主强度点（顶部）
    ctx.beginPath();
    ctx.arc(dataTopX, dataTopY, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // 农民强度点（左下）
    ctx.beginPath();
    ctx.arc(dataLeftX, dataLeftY, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // 单挑强度点（右下）
    ctx.beginPath();
    ctx.arc(dataRightX, dataRightY, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // 在顶点绘制标签和数值
    ctx.fillStyle = '#4a5568';
    ctx.font = 'bold 14px Microsoft YaHei';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 地主强度标签（顶部）
    ctx.fillText(`地主强度: ${landLordValue}`, centerX, centerY - radius - 20);
    
    // 农民强度标签（左下）
    ctx.save();
    ctx.translate(centerX - radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
    ctx.rotate(-Math.PI / 3);
    ctx.fillText(`农民强度: ${farmerValue}`, 0, -20);
    ctx.restore();
    
    // 单挑强度标签（右下）
    ctx.save();
    ctx.translate(centerX + radius * Math.cos(Math.PI / 6), centerY + radius * Math.sin(Math.PI / 6));
    ctx.rotate(Math.PI / 3);
    ctx.fillText(`单挑强度: ${soloValue}`, 0, -20);
    ctx.restore();
}

// 显示角色详情
function showCharacterDetail(character) {
    console.log("显示角色详情:", character.name);
    document.getElementById('modal-title').textContent = character.name;
    document.getElementById('modal-image').src = character.image;
    document.getElementById('modal-image').onerror = function() {
        this.src = `https://placehold.co/400x600/667eea/ffffff?text=${character.name}`;
    };
    document.getElementById('modal-description').textContent = character.description;
    
    // 显示标签
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    character.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // 创建雷达图容器
    const statsContainer = document.querySelector('.stats');
    statsContainer.innerHTML = `
        <div class="radar-container">
            <h3>能力评估</h3>
            <div class="radar-wrapper">
                <canvas id="radar-chart" width="400" height="400"></canvas>
            </div>
            <div class="score-summary">
                <p>总分: <span class="total-score">${(character.stats.地主强度 || 0) + (character.stats.农民强度 || 0) + (character.stats.单挑强度 || 0)}/15</span></p>
            </div>
        </div>
    `;
    
    // 绘制雷达图
    setTimeout(() => {
        const canvas = document.getElementById('radar-chart');
        if (canvas && character.stats) {
            drawTriangleRadar(canvas, character.stats);
        }
    }, 50);

    // 显示模态框
    document.getElementById('character-modal').classList.remove('hidden');
}

// 显示彩蛋详情
function showEasterDetail(name, description, image) {
    console.log("显示彩蛋详情:", name);
    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-image').onerror = function() {
        this.src = 'https://placehold.co/400x400/667eea/ffffff?text=彩蛋';
    };
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-tags').innerHTML = '<span class="tag">彩蛋</span>';
    
    const statsContainer = document.querySelector('.stats');
    statsContainer.innerHTML = '<h3>状态</h3><p>敬请期待，正在开发中...</p>';
    
    document.getElementById('character-modal').classList.remove('hidden');
}

// 关闭模态框
function closeModal() {
    console.log("关闭模态框");
    document.getElementById('character-modal').classList.add('hidden');
}

// 点击模态框背景关闭
document.getElementById('character-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// 键盘ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});