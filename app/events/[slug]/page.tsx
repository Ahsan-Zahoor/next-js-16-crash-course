import { Suspense } from "react";

const EventDetails = async ({ params }: { params: Promise<string> }) => {
    const slug = params.then((p) => p.slug);
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <EventDetails params={slug} />
            </Suspense>
        </main>
    )
}
export default EventDetails