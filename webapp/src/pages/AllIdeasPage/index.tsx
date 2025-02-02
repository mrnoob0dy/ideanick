import { trpc } from "../../lib/trpc";

export const AllIdeasPAge = () => {
    const { data, error, isLoading, isFetching, isError } =
        trpc.getIdeas.useQuery();
    if (isLoading || isFetching) {
        return <span>Loading...</span>;
    }
    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div>
            <h1>All Ideas</h1>
            <div>
                {data.ideas.map((item) => {
                    return (
                        <div key={item.nick}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
