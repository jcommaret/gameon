import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schemas/formSchema";
import { useStore } from "../../store/useStore";

interface FormInputs {
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
  quantity: number;
  location: string;
  acceptTerms: boolean;
  newsletter: boolean;
}

const locations = [
  "New York",
  "San Francisco",
  "Seattle",
  "Chicago",
  "Boston",
  "Portland",
];

export const Form = () => {
  const { setFormData, setSubmitted } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: FormInputs) => {
    setFormData(data);
    setSubmitted(true);
  };

  return (
    <form
      id="signup"
      name="reservation"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className={`formData ${errors.firstname ? "error" : ""}`}>
        <label htmlFor="firstname">Prénom</label>
        <input
          className="text-control"
          type="text"
          id="firstname"
          {...register("firstname")}
        />
        {errors.firstname && <small>{errors.firstname.message}</small>}
      </div>

      <div className={`formData ${errors.lastname ? "error" : ""}`}>
        <label htmlFor="lastname">Nom</label>
        <input
          className="text-control"
          type="text"
          id="lastname"
          {...register("lastname")}
        />
        {errors.lastname && <small>{errors.lastname.message}</small>}
      </div>

      <div className={`formData ${errors.email ? "error" : ""}`}>
        <label htmlFor="email">E-mail</label>
        <input
          className="text-control"
          type="email"
          id="email"
          {...register("email")}
        />
        {errors.email && <small>{errors.email.message}</small>}
      </div>

      <div className={`formData ${errors.birthdate ? "error" : ""}`}>
        <label htmlFor="birthdate">Date de naissance</label>
        <input
          className="text-control"
          type="date"
          id="birthdate"
          {...register("birthdate")}
        />
        {errors.birthdate && <small>{errors.birthdate.message}</small>}
      </div>

      <div className={`formData ${errors.quantity ? "error" : ""}`}>
        <label htmlFor="quantity">
          À combien de tournois GameOn avez-vous déjà participé ?
        </label>
        <input
          type="number"
          className="text-control"
          id="quantity"
          min="0"
          max="99"
          {...register("quantity", { valueAsNumber: true })}
        />
        {errors.quantity && <small>{errors.quantity.message}</small>}
      </div>

      <div className={`formData ${errors.location ? "error" : ""}`}>
        <p className="text-label">
          A quel tournoi souhaitez-vous participer cette année ?
        </p>
        {locations.map((location) => (
          <div key={location}>
            <input
              className="checkbox-input"
              type="radio"
              id={`location-${location}`}
              value={location}
              {...register("location")}
            />
            <label className="checkbox-label" htmlFor={`location-${location}`}>
              <span className="checkbox-icon"></span>
              {location}
            </label>
          </div>
        ))}
        {errors.location && <small>{errors.location.message}</small>}
      </div>

      <div className={`formData ${errors.acceptTerms ? "error" : ""}`}>
        <input
          className="checkbox-input"
          type="checkbox"
          id="acceptTerms"
          {...register("acceptTerms")}
        />
        <label className="checkbox2-label" htmlFor="acceptTerms">
          <span className="checkbox-icon"></span>
          J'ai lu et accepté les conditions d'utilisation.
        </label>
        {errors.acceptTerms && <small>{errors.acceptTerms.message}</small>}
      </div>

      <div className="formData">
        <input
          className="checkbox-input"
          type="checkbox"
          id="newsletter"
          {...register("newsletter")}
        />
        <label className="checkbox2-label" htmlFor="newsletter">
          <span className="checkbox-icon"></span>
          Je souhaite être prévenu des prochains évènements.
        </label>
      </div>

      <div className="center-flex">
        <button className="btn btn-submit" type="submit">
          C'est parti
        </button>
      </div>
    </form>
  );
};
