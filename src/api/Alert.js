import Swal from "sweetalert2";

// page loading function ==> before : showLoading() ==> After : Swal.showLoading()
export function showLoading() {
  Swal.fire({
    title: "Please Wait !",
    html: "data uploading", // add html attribute if you want or remove
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
}

// export const Toast= ()=> {
//     Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//     })
// }
//use
// Toast.fire({
//     icon: 'success',
//     title: 'Signed in successfully'
//   })

export function serverDownAlert() {
  Swal.fire({
    title: "Error!",
    text: "Server Down !",
    icon: "error",
    confirmButtonText: "Cool",
  });
}

export function blankAlert() {
  Swal.fire({
    icon: "info",
    title: "Oops...",
    text: "Please Enter all Fields !! ",
    confirmButtonText: "Cool",
  });
}
