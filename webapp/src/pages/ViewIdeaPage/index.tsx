import { useParams } from "react-router-dom"

export const ViewIdeaPage = () => {
    const {ideaNick} = useParams() as { ideaNick: string}
    return (
        <div>
            <h1>{ideaNick}</h1>
            <p>Idea 1 description</p>
            <div>
                <p>Text paragraph 1 of idea 1</p>
                <p>Text paragraph 2 of idea 1</p>
                <p>Text paragraph 3 of idea 1</p>
            </div>
        </div>
    )
}