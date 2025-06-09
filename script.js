// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Sample data for activities
// In a real application, this would come from a database or API
const activities = [
    {
        id: 1,
        name: "宗像サッカークラブ",
        category: "sports",
        area: "munakata",
        ageGroup: ["kids", "teens"],
        description: "子どもから中高生まで対象のサッカークラブです。初心者から経験者まで楽しく技術を学べます。",
        location: "宗像市民体育館",
        schedule: "毎週土曜日 9:00-12:00",
        contact: "090-XXXX-XXXX（山田）",
        email: "munakata.soccer@example.com",
        image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 2,
        name: "福津ピアノ教室",
        category: "music",
        area: "fukutsu",
        ageGroup: ["kids", "teens", "adults"],
        description: "初心者から上級者まで、個人のレベルに合わせたピアノレッスンを提供しています。",
        location: "福津市文化センター",
        schedule: "平日 15:00-19:00（予約制）",
        contact: "0940-XX-XXXX（佐藤）",
        email: "fukutsu.piano@example.com",
        image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 3,
        name: "宗像伝統工芸教室",
        category: "culture",
        area: "munakata",
        ageGroup: ["adults", "seniors"],
        description: "地域の伝統工芸を学び、継承するための教室です。初心者歓迎。",
        location: "宗像市文化会館",
        schedule: "毎月第2・4日曜日 13:00-16:00",
        contact: "0940-XX-XXXX（田中）",
        email: "munakata.craft@example.com",
        image: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 4,
        name: "福津英会話サークル",
        category: "study",
        area: "fukutsu",
        ageGroup: ["teens", "adults", "seniors"],
        description: "楽しく英会話を学ぶサークルです。ネイティブ講師による指導があります。",
        location: "福津市中央公民館",
        schedule: "毎週水曜日 19:00-21:00",
        contact: "0940-XX-XXXX（鈴木）",
        email: "fukutsu.english@example.com",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 5,
        name: "宗像水泳教室",
        category: "sports",
        area: "munakata",
        ageGroup: ["kids", "teens"],
        description: "子どもから中高生まで対象の水泳教室です。初心者コースから上級者コースまであります。",
        location: "宗像市民プール",
        schedule: "毎週火・木・土曜日 コースにより異なる",
        contact: "0940-XX-XXXX（高橋）",
        email: "munakata.swim@example.com",
        image: "https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 6,
        name: "福津絵画クラブ",
        category: "art",
        area: "fukutsu",
        ageGroup: ["kids", "adults", "seniors"],
        description: "絵画を楽しく学べるクラブです。初心者から経験者まで歓迎します。",
        location: "福津市アートセンター",
        schedule: "毎週土曜日 14:00-16:00",
        contact: "090-XXXX-XXXX（中村）",
        email: "fukutsu.art@example.com",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 7,
        name: "宗像太極拳サークル",
        category: "sports",
        area: "munakata",
        ageGroup: ["adults", "seniors"],
        description: "健康維持のための太極拳を学ぶサークルです。初心者歓迎。",
        location: "宗像市コミュニティセンター",
        schedule: "毎週月・金曜日 10:00-12:00",
        contact: "0940-XX-XXXX（木村）",
        email: "munakata.taichi@example.com",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 8,
        name: "福津子ども科学教室",
        category: "study",
        area: "fukutsu",
        ageGroup: ["kids"],
        description: "子どもたちが楽しく科学を学べる教室です。実験やものづくりを通して科学の面白さを体験します。",
        location: "福津市中央図書館",
        schedule: "毎月第3土曜日 10:00-12:00",
        contact: "0940-XX-XXXX（伊藤）",
        email: "fukutsu.science@example.com",
        image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Function to display activities
function displayActivities(filteredActivities = activities) {
    const container = document.getElementById('activities-container');
    const loadingMessage = document.getElementById('loading-message');
    
    // Clear loading message and container
    loadingMessage.style.display = 'none';
    container.innerHTML = '';
    
    if (filteredActivities.length === 0) {
        container.innerHTML = '<p>該当する習い事が見つかりませんでした。</p>';
        return;
    }
    
    filteredActivities.forEach(activity => {
        const ageGroupText = activity.ageGroup.map(age => {
            switch(age) {
                case 'kids': return '子ども';
                case 'teens': return '中高生';
                case 'adults': return '大人';
                case 'seniors': return 'シニア';
                default: return '';
            }
        }).join('、');
        
        const categoryText = getCategoryText(activity.category);
        const areaText = activity.area === 'munakata' ? '宗像市' : '福津市';
        
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
            <img src="${activity.image}" alt="${activity.name}" class="activity-image">
            <div class="activity-content">
                <h3 class="activity-title">${activity.name}</h3>
                <div class="activity-meta">
                    <span class="activity-tag">${areaText}</span>
                    <span class="activity-tag">${categoryText}</span>
                    <span class="activity-tag">${ageGroupText}</span>
                </div>
                <p class="activity-description">${activity.description}</p>
                <div class="activity-details">
                    <p><strong>場所:</strong> ${activity.location}</p>
                    <p><strong>日時:</strong> ${activity.schedule}</p>
                    <p class="activity-contact"><strong>連絡先:</strong> ${activity.contact}</p>
                    <p class="activity-contact"><strong>メール:</strong> ${activity.email}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Helper function to get category text
function getCategoryText(category) {
    switch(category) {
        case 'sports': return 'スポーツ';
        case 'music': return '音楽';
        case 'art': return '芸術';
        case 'study': return '学習';
        case 'culture': return '文化';
        case 'other': return 'その他';
        default: return '';
    }
}

// Filter activities based on selected filters
function filterActivities() {
    const areaFilter = document.getElementById('area-filter').value;
    const categoryFilter = document.getElementById('category-filter').value;
    const ageFilter = document.getElementById('age-filter').value;
    
    let filtered = activities;
    
    if (areaFilter !== 'all') {
        filtered = filtered.filter(activity => activity.area === areaFilter);
    }
    
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(activity => activity.category === categoryFilter);
    }
    
    if (ageFilter !== 'all') {
        filtered = filtered.filter(activity => activity.ageGroup.includes(ageFilter));
    }
    
    displayActivities(filtered);
}

// Add event listeners to filters
document.getElementById('area-filter').addEventListener('change', filterActivities);
document.getElementById('category-filter').addEventListener('change', filterActivities);
document.getElementById('age-filter').addEventListener('change', filterActivities);

// Registration form link (would be replaced with actual Google Form link)
document.getElementById('registration-button').href = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayActivities();
});
