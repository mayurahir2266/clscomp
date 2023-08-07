import React from "react";

class Calculator extends React.Component {
    render() {
        return (
            <>
                <div className="main">
                    <section>
                        <div class="display"></div>
                    </section>
                    <section>
                        <button>CE</button>
                        <button>Clr</button>
                        <button>PI</button>
                        <button>+</button>

                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>-</button>

                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>x</button>

                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>/</button>

                        <button>.</button>
                        <button>0</button>
                        <button>=</button>
                        <button>+/-</button>
                    </section>

                </div>
            </>
        )
    }
}

export default Calculator;