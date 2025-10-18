function toggleAccessory(id) {
    const accessory = document.getElementById(id);
    accessory.style.display = (accessory.style.display === 'block') ? 'none' : 'block';
}

function resetLumo() {
    document.querySelectorAll('.accessory').forEach(acc => acc.style.display = 'none');
}
function done() {
    const sound = document.getElementById("praiseSound");
    sound.play()
}