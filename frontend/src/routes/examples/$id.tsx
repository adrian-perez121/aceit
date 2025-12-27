import { createFileRoute, useLoaderData} from '@tanstack/react-router'

export const Route = createFileRoute('/examples/$id')({
    component: RouteComponent,
    loader: async ( { params }) => {
        const id = params.id
        return { id }
    }
})

function RouteComponent() {
    const data = useLoaderData({ from: "/examples/$id" })
  return <div>Hello "/examples/{data.id}"!</div>
}
