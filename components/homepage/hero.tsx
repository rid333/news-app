import { PoynterTextRegular, FuturaRegular } from '@/lib/fonts';
import { cn } from '@/lib/utils'

import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import HomeImage from '@/public/home.png'

const Hero = () => {
    return (
        <div className="flex justify-center items-center gap-6">
            <div className='flex flex-col gap-3 w-[280px]'>
                <div className={cn(('font-bold text-3xl hover:text-primary cursor-pointer transition'), (`${PoynterTextRegular.className}`))}>What Trump's win means for Ukraine, Middle East and China</div>
                <div className={cn(('text-base'), (`${FuturaRegular.className}`))}>
                    Donald Trump’s return to the White House is set to reshape US foreign policy, promising potentially radical shifts on multiple fronts as war and uncertainty grip parts of the world...
                </div>
            </div>
            <div className="w-[500px] overflow-hidden rounded-md">
                <AspectRatio ratio={16 / 9}>
                    <Image fill={true} src={HomeImage} alt="Image" className="rounded-md object-cover hover:scale-110 transition-all duration-500 cursor-pointer" />
                </AspectRatio>
            </div>
        </div >
    )
}

export default Hero;
