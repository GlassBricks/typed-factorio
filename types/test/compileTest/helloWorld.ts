function greetPlayer(player: LuaPlayer) {
  player.print("Hello, world!")
}

// todo: event types
script.on_event(defines.events.on_player_created, (e: EventData) => {
  greetPlayer(game.get_player((e as OnPlayerCreatedEvent).player_index)!)
})

script.on_init(() => {
  for (const [, luaPlayer] of pairs(game.players)) {
    greetPlayer(luaPlayer)
  }
})
