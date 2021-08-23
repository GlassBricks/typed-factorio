import { tstl } from "../util"

describe("on_event", () => {
  test("set handler", () => {
    tstl`
      script.on_event(defines.events.on_ai_command_completed, (e: OnAiCommandCompletedEvent) => {
        log(e.result)
      })
      script.on_event("someInput", (e: CustomInputEvent) => {
        log(serpent.block(e))
      })
      script.on_event(defines.events.on_area_cloned, undefined)
    `.expectToMatchSnapshot()

    tstl`
      script.on_event(defines.events.on_area_cloned, (e: OnAiCommandCompletedEvent)=> {})
    `.expectToHaveDiagnostics()
  })

  test("filters", () => {
    tstl`
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
    `.expectToHaveNoDiagnostics()

    tstl`
      script.on_event(
        defines.events.on_tick,
        0 as any,
        0 as any
      )
    `.expectToHaveDiagnostics()
  })
})
describe("Event filters", () => {
  test("set_event_filter", () => {
    tstl`
      script.set_event_filter(defines.events.on_robot_built_entity, [
        {
          filter: "circuit-network-connectable",
        },
      ])
    `.expectToHaveNoDiagnostics()

    tstl`
      script.set_event_filter(defines.events.on_tick, 0 as any)
    `.expectToHaveDiagnostics()
  })

  test("get_event_filter", () => {
    tstl`
      const filters: LuaEntityDamagedEventFilter[] | undefined = script.get_event_filter(defines.events.on_entity_damaged)
    `.expectToHaveNoDiagnostics()

    tstl`
      script.get_event_filter(defines.events.on_surface_cleared)
    `.expectToHaveDiagnostics()
  })
})

test("custom event", () => {
  tstl`
    const myCustomEvent = script.generate_event_name<{ myCustomData: number }>()
    script.on_event(myCustomEvent, (d) => {
      log(d.myCustomData)
    })
    script.raise_event(myCustomEvent, { myCustomData: 0 })
    script.get_event_handler(myCustomEvent)!({ myCustomData: 0 })
  `.expectToHaveNoDiagnostics()
})
