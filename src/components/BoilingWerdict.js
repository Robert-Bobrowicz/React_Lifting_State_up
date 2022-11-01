export default function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water is boiling! Temperature of water is equal or more than 100 degrees of Centrigrade.</p>;
    }

    return <p>The water is not boiling yet... Temperature of water is less than 100 degrees of Centrigrade.</p>;
};