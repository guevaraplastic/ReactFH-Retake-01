
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { counter, increment } = useCounter();

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // Si la data tiene un valor, toma la data d ela posicion 0
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment(1)}>
                Next quote
            </button>

        </>
    )
}
