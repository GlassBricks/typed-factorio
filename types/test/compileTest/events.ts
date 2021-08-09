script.on_event(defines.events.on_ai_command_completed, (e: OnAiCommandCompletedEvent) => {
  print(e.result)
})

script.on_event(defines.events.on_area_cloned, undefined)

script.on_event(
  defines.events.on_built_entity,
  (e: OnBuiltEntityEvent) => {
    log(serpent.line(e))
  },
  [
    {
      filter: "type",
      type: "foo",
    },
    {
      filter: "ghost_type",
      type: "bar",
    },
  ]
)

script.set_event_filter(defines.events.on_robot_built_entity, [
  {
    filter: "circuit-network-connectable",
  },
])
const filters: LuaEntityDamagedEventFilter[] | undefined = script.get_event_filter(defines.events.on_entity_damaged)

script.on_event("someInput", (e: CustomInputEvent) => {
  log(serpent.block(e))
})

const myCustomEvent = script.generate_event_name<{ myCustomData: number }>()
script.on_event(myCustomEvent, (d) => {
  log(d.myCustomData)
})
script.get_event_handler(myCustomEvent)!({ myCustomData: 0 })
