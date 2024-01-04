
import { IUser } from "../../interfaces/IUser"
export function spotifyuser(user:SpotifyApi.CurrentUsersProfileResponse):IUser{


return {
  id:user.id,
  name:user.display_name,
  imgUrl:user.images.pop().url
}











}
