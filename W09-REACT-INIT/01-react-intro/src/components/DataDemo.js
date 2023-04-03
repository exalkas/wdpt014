export function DemoObject() {

    const student = {
        name: "john",
        age: 13
    }

    const smokes = false;

    const numbers = [1, 2, 3, 4, 5]

    return (
        <>
            <div>
                Name: {student.name}
            </div>
            <div>
                Smokes: {smokes}
            </div>
            <div>
                {
                    numbers.map((item, idx) => {

                        return <p key={idx}>{item}</p>
                })
                }
            </div>
            
        </>
    )
}