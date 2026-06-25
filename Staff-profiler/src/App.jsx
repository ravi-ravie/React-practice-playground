import Card from "./components/Card"


const App = () => {
    const data = [{book:'Metamorphosis', author:'franz'},{book:'Crime and Punishment', author:'dostoevsky'},{book:'The prince', author:'machiavelli'}]
        return (
            <div className="parent">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        )
}

export default App