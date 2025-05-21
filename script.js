// DOM이 모두 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.toggle-button');
    const content = document.querySelector('.toggle-content');
  
    // 버튼이 실제로 존재할 경우에만 이벤트 연결
    if (button && content) {
      button.addEventListener('click', () => {
        content.classList.toggle('active');
        button.textContent = content.classList.contains('active')
          ? '▼ 【研究倫理審査申請書の基本構成】閉じる'
          : '▶ 【研究倫理審査申請書の基本構成】を見る';
      });
    }
  });
  