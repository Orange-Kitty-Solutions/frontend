const statsData = [
    { value: "+5000", label: "Propiedades gestionadas" },
    { value: "65%", label: "Ahorro promedio de nuestros clientes" },
    { value: "+2000", label: "Usuarios buscando inmuebles" }
];

const StatsSection = () => {
    return (
        <div className="bg-neutral-50">
            <div className="container mx-auto px-4 py-20 flex justify-between">
                {statsData.map((data, index) => (
                    <div key={index} className="flex-col text-center text-primary-400">
                        <p className="text-7xl">{data.value}</p>
                        <p className="text-3xl">{data.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;