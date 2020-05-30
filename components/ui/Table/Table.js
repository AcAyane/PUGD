import React from 'react'

const Table = ({Thead,className,Tbody, ...props}) => {
    return (
        <section className={`invoice-list-wrapper section`} {...props}>
            <div className={`responsive-table`}>
                <table className={`table invoice-data-table white border-radius-4 pt-1 ${className}`}>
                    <thead>
                    {Thead}
                    </thead>
                    {Tbody}
                </table>
            </div>
        </section>
    )
}

export default Table
