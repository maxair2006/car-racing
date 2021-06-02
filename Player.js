class Player{
    constructor(){
        
    }
    getCount(){
        var gameref = database.ref("playerCount")
        gameref.on("value",function(data){
           playercount=data.val()
        })
    }
    updateCount(count){
database.ref('playerCount').set({
    playerCount:count
})
    }
    update(name){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({
            name:name
        })
    }
}