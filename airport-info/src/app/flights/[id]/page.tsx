export default function FlightInfo( {params }: { params: { id: string } }) {
    return (
        <div>Hello From Flight # {params.id}</div>
    );
}