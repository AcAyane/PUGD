import Link from 'next/link'  

 
export default () => (
    <div className="root">
        <h2>About</h2>
        <Link href="/">Home</Link>

        <style global jsx>
            {`
        .root{
            display:flex;
            justify-content:center;
            align-content:center;
        }
        `}
        </style>

    </div>

)
