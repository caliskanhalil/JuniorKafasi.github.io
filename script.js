// script.js
function changeText() {
    const paragraph = document.querySelector('p');
    paragraph.textContent = "You clicked the button!";
}

 document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userEmail = document.getElementById('email').value;
    // Burada normalde sunucuya e-postayı göndermek için bir işlem yapılabilir, ancak bu sadece bir örnek olduğu için işlem yapılmayacak.
    document.getElementById('confirmationMessage').innerText = `E-posta adresiniz: ${userEmail}. Aboneliğiniz başarıyla alındı.`;
    document.getElementById('email').value = ''; // Formu temizle
  });
