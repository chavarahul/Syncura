import { NextFont } from 'next/dist/compiled/@next/font'
import { Poppins} from 'next/font/google'

export const poppin : NextFont = Poppins({ subsets: ['latin'], weight: ['100','200','300','400', '500', '300', '600'] })
