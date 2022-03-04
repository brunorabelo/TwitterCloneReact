
import mockapi from "../../api/mockapi";

export default async function Follow({userId}) {
    await mockapi.follow(userId)
}
