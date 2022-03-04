
import apimock from "../../api/apimock";

export default async function Follow({userId}) {
    await apimock.follow(userId)
}
