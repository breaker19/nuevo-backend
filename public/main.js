const socket = io.connect();
socket.on('messages', (data) => {
    console.log(data);
});

function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
     
            <strong style="color: red;">${elem.author}</strong>:
            <em style="color: blue;">${elem.text}</em>
            <strong>${elem.fecha} </strong>
       
            
       
            </div>`)

    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
function addMessage(e) {
    const mensaje = {
        author: document.getElementById("username").value,
        text: document.getElementById('texto').value,
        fecha: document.getElementById('fecha').value,
    };
    socket.emit('new-message', mensaje);
    return false;
}



socket.on("messages", function (data) {
    render(data);
  });