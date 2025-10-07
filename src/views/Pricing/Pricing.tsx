import { Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "react-bootstrap"
import { div, p } from "framer-motion/client"

export default function TuitionFeesSection() {
    const monthlyFees = [
        {
            level: "Educación Inicial",
            hours: "08:10 hs. a 12:50 hs.",
            fee: "$ 189.200",
        },
        {
            level: "Educación Primaria",
            hours: "08:00 hs. a 16:30 hs.",
            fee: "$ 243.800",
        },
        {
            level: "Educación Secundaria - Ciclo Básico",
            hours: "7:50 hs. a 13:50 hs.",
            fee: "$ 193.700",
        },
        {
            level: "Educación Secundaria - Ciclo Orientado",
            hours: "7:50 hs. a 13:50 hs.",
            fee: "$ 199.100",
        },
        {
            level: "Educación Superior",
            hours: "8:30 hs. a 13:30 hs.",
            fee: <p>$80.000 (4 meses)<br /><span className="text-success fs-6">(Pago anticipado $300.000)</span></p>,
        }
    ]

    const enrollmentFeesNew = [
        {
            level: "Educación Inicial",
            fee: "$ 220.000",
        },
        {
            level: "Educación Primaria",
            fee: "$ 260.000",
        },
        {
            level: "Educación Secundaria",
            fee: "$ 240.000",
        },
    ]
    const enrollmentFeesActual = [
        {
            level: "Educación Inicial",
            fee: "$ 200.000",
        },
        {
            level: "Educación Primaria",
            fee: "$ 240.000",
        },
        {
            level: "Educación Secundaria",
            fee: "$ 220.000",
        },
        {
            level: "Ludoteca (Según cantidad de horas)",
            fee: "$ 180.000 - $ 200.000",
        },
    ]

    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-light mb-2">Aranceles Octubre 2025</h1>
            </div>

            <div className="grid gap-8 mb-12">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Cuotas Mensuales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {monthlyFees.map((item, index) => (
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                                        <div className="font-medium">{item.level}</div>
                                        <div className="text-muted-foreground text-sm">{item.hours}</div>
                                        <div className="text-right font-bold text-lg">{item.fee}</div>
                                    </div>
                                    {index < monthlyFees.length - 1 && <hr className="col-span-3 my-2" />}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <hr style={{ backgroundColor: "green", height: "2px", border: "none" }} />
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Matrículas 2025 - Alumnos nuevos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {enrollmentFeesNew.map((item, index) => (
                                <div key={index}>
                                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                                        <div className="font-medium">{item.level}</div>
                                        <div className="text-right font-bold text-lg">{item.fee}</div>
                                    </div>
                                    {index < enrollmentFeesNew.length - 1 && <hr className="col-span-2 my-2" />}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Matrículas 2025 - Alumnos actuales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {enrollmentFeesActual.map((item, index) => (
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                                        <div className="font-medium">{item.level}</div>
                                        <div className="text-right font-bold text-lg">{item.fee}</div>
                                    </div>
                                    {index < enrollmentFeesActual.length - 1 && <hr className="col-span-2 my-2" />}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 bg-muted/30 p-6 rounded-lg">
                <Button className="gap-2" size="lg" variant="success">
                    <a className=" d-flex flex-row align-items-center gap-3 text-light" href="/pricing/aranceles-preferenciales.pdf" download>
                        <Download className="h-4 w-4" />
                        Arancel Preferencial
                    </a>
                </Button>
            </div>
        </div>
    )
}
