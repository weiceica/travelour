type Props = {
    title: string,
    col1: string,
    col2: string,
    col3: string,
    col4: string,
    col5: string,
}

function Agenda({ title, col1, col2, col3, col4, col5 }: Props) {
  return (
    <div className="mt-20 text-white text-lg">
        <h3 className="border border-white font-semibold">{title}</h3>
        <div className="flex w-full">
            <div className="basis-1/5 border border-white h-20">
                {col1}
                <div className="mt-2">Delta</div>
            </div>
            <div className="basis-1/5 border border-white ">
                {col2}
                <div className="mt-2">A360</div>
            </div>
            <div className="basis-1/5 border border-white ">
                {col3}
                <div className="mt-2">30 Feb</div>
            </div>
            <div className="basis-1/5 border border-white ">
                {col4}
                <div className="mt-2">14:00</div>
            </div>
            <div className="basis-1/5 border border-white ">
                {col5}
                <div className="mt-2">23:00</div>
            </div>
        </div>
    </div>
  )
}

export default Agenda