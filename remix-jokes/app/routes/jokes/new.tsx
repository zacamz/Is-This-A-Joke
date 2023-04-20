export default function NewJokeIndex() {
    return (
        <div>
            <p>Add your own hilarious joke</p>
            <form method="post">
                <div>
                    <label>
                        Name:<input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        Content: <textarea name="content"/>
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Add to stream of Laughter
                    </button>
                </div>
            </form>
        </div>)
}