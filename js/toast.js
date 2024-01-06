// Toast Notification with Progress Bar provided by https://codepen.io/alvarotrigo/pen/YzvKNvo
const button = document.querySelector("#btn_add-email"),
  toast = document.querySelector(".toast");
  toastContent = document.querySelector("#toast-circle");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

    console.log("toast");
    button.addEventListener("click", () => {
        if (checkEmail()) 
        {
            toastContent.classList.add("icon-check");
            toastContent.classList.remove("icon-x");
            $(".fas").css("backgroundColor", "blue");
            generateToast("Success!", "Email Address has been Added!");
        }
        else
        {
            toastContent.classList.add("icon-x");
            toastContent.classList.remove("icon-check");
            $(".fas").css("backgroundColor", "red");   
            generateToast("Error!", "Email Address is not valid!");   
        }
        
      });
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
      
        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);
      
        clearTimeout(timer1);
        clearTimeout(timer2);
      });

function generateToast(title, desc)
{
    console.log("toast email validated");
    toast.classList.add("active");
    progress.classList.add("active");
        
    timer1 = setTimeout(() => {
    toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds
        
    timer2 = setTimeout(() => {
    progress.classList.remove("active");
    }, 5300);

    messageOne = document.querySelector(".text-1");
    messageTwo = document.querySelector(".text-2");

    messageOne.textContent = title;
    messageTwo.textContent = desc;
}      