BlockEvents.rightClicked('create:item_vault', e => {
    if(e.item.id == 'pipez:item_pipe'){
    e.player.tell("Пожалуйста, не соединяйте предметные трубы и хранилища. Они очень сильно лагают вместе.")
    e.cancel()}
})

