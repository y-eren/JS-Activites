let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(a) {
     const styles = a.currentTarget.classList;
     if(styles.contains('azalıcı')) {
         count--;
     }
     value.textContent = count;
     if(styles.contains('arttır')) {
         count++;
         
        }
        value.textContent = count;
        
        if(styles.contains('sıfırla')) {
            count = 0;
        }
        value.textContent = count;
    })
});