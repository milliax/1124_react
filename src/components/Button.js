export default function Button({ url, text, image }) {
    return (
        <a href={url}
            className="button_decoration"
            target="_blank"
            rel="noreferrer noopener">
            {text}
        </a>
    )
}