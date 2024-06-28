const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector(".btn");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};


//close form
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//  Get data from form
// const form = document.getElementsById('submit-btn')
// form.addEventListener('submit',function(e){
//      e.preventDefault();
//         const taskDescription= document.getElementById('text').value ;
//         const date= document.getElementById('dateInput').value ;
//         const time= document.getElementById('timeInput').value ;
//         const email= document.getElementById('email').value ;
//         let html = `<p>You entered: ${dateInput} at ${timeInput}</p>`;
// overlay.insertAdjacentHTML("afterend", html);
// })
submit.addEventListener("click", render_task);
function render_task(e) {
  e.preventDefault();
  const taskDescription = document.getElementById("text").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("timeInput").value;
  let html = `
      <div class="tasks ">
       <div class="container">
         <div class="example">
            <div class="titles">
               <h1>Task</h1>
               <span>⚡️ ${taskDescription}</span>
                <ul class="info">
                  <li>📅 ${date}</li>
                  <li>⏱ ${time}</li>
                  <li>⭕ Pending</li>
                  
                  
            </ul>
             <div class="check">
                 <label for="Checkbox" class="checked">✅Completed? Check here &rarr;</label>
                 <input type="checkbox" id="myCheckbox" >
              </div>
          </div>  
          </div>
        </div>
   `;
  modal.insertAdjacentHTML("afterend", html);
  closeModal();
}
//minimum date input
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);