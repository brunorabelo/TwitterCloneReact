
import AppApi from '~apijs'
export default async function Follow({userId}) {
    await AppApi.follow(userId)
}
