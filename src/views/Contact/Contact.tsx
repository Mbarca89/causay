import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { MapPin, Mail, Phone, Smartphone, Send, Loader2 } from "lucide-react"

type FormData = {
  nombre_apellido: string
  email: string
  telefono: string
  mensaje: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitSuccess(false)

    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current!,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      )

      setSubmitSuccess(true)
      reset() // Reset form fields
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitError("Hubo un problema al enviar el mensaje. Por favor intente nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mb-5">
      <h2 className="text-center mb-5 fs-2 fw-bold">Contáctenos</h2>

      <div className="row">
        {/* Contact Information */}
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="bg-light shadow-md rounded p-4 h-100">
            <h3 className="mb-4 fs-4 fw-bold">Información de Contacto</h3>

            <div className="d-flex align-items-start mb-3">
              <MapPin className="text-green-500 me-3 flex-shrink-0" />
              <div>
                <strong>Dirección</strong>
                <p className="mb-0">Quines 655 | San Luis | Argentina</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <Mail className="text-green-500 me-3 flex-shrink-0" />
              <div>
                <strong>E-mail</strong>
                <p className="mb-0">
                  <a href="mailto:info@causay.edu.ar" className="text-green-500 hover:underline">
                    info@causay.edu.ar
                  </a>
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <Phone className="text-green-500 me-3 flex-shrink-0" />
              <div>
                <strong>Teléfonos</strong>
                <p className="mb-0">+54 (0266) 442 9011 – 443 8114</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <Smartphone className="text-green-500 me-3 flex-shrink-0" />
              <div>
                <strong>Celular</strong>
                <p className="mb-0">+54 (266) 4 73 23 05</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <div className="bg-light shadow-md rounded p-4">
            <h3 className="mb-4 fs-4 fw-bold">Envíenos un mensaje</h3>

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="nombre_apellido" className="form-label">
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.nombre_apellido ? "is-invalid" : ""}`}
                  id="nombre_apellido"
                  {...register("nombre_apellido", { required: "Este campo es obligatorio" })}
                />
                {errors.nombre_apellido && <div className="invalid-feedback">{errors.nombre_apellido.message}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  {...register("email", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Dirección de email inválida",
                    },
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
                  id="telefono"
                  {...register("telefono", { required: "Este campo es obligatorio" })}
                />
                {errors.telefono && <div className="invalid-feedback">{errors.telefono.message}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
                  id="mensaje"
                  rows={5}
                  {...register("mensaje", { required: "Este campo es obligatorio" })}
                ></textarea>
                {errors.mensaje && <div className="invalid-feedback">{errors.mensaje.message}</div>}
              </div>

              {submitError && <div className="alert alert-danger">{submitError}</div>}
              {submitSuccess && (
                <div className="alert alert-success">
                  Su mensaje ha sido enviado correctamente. Nos pondremos en contacto con usted pronto.
                </div>
              )}

              <button type="submit" className="btn btn-success d-flex align-items-center" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
