import React, { Component } from 'react'

export default class Glasses extends Component {

    renderGlasses = () => {
        let { handleClick } = this.props;

        return (
            <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }} className='mt-5 p-3'>
                {[...Array(9)].map((_, i) => (
                    <div
                        key={i}
                        className="button"
                        style={{ cursor: 'pointer', marginRight: 15 }}
                        onClick={() => { handleClick(i) }}
                    >
                        <img
                            width={90}
                            height={75}
                            src={`./glassesImage/g${i + 1}.jpg`}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return this.renderGlasses()
    }
}
