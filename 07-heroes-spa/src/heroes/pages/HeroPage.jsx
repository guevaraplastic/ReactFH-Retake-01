import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesById } from "../helpers"
import { useMemo } from "react";

export const HeroPage = () => {

    // conseguir los parametros de la ruta
    const { id } = useParams()
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroesById(id), [id]);

    const onNavigateBack = () => {
        // -1 Navega al historial anterior
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8"></div>
            <h3 className="">{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                <li className="list-group-item"><b>Editorial:</b> {hero.publisher}</li>
                <li className="list-group-item"><b>Primera aparición:</b> {hero.first_appearance}</li>
            </ul>

            <h5 className="mt-3">Personajes</h5>
            <p>{hero.characters}</p>

            <button
                className="btn btn-outline-primary"
                onClick={onNavigateBack}
            >
                Regresar
            </button>
        </div>
    )
}
