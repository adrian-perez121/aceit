import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/examples/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <>
        <div>
          Currently we're in the index of examples. Think of examples as a model. Let's
          assume that we had an example with an id of 1. Try appending a "1" to the end of the slash in the link and see
          what you get
        </div>
        <div>Hello "/examples/"!</div>
      </>
  )
}
