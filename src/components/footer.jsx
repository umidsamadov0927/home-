import '../App.css'


export default function Footer () {
    return (
        <>
            <footer className="py-6 bg-gray-900 text-gray-300  mt-[245px]">
                <div className="w-[1300px] mx-auto">
                    <div className="flex items-center justify-between">
                        <p>&copy; {new Date().getFullYear()} My Web Site. Barcha huquqlar himoyalangan.</p>
                        <ul className="flex gap-4">
                            <li>Maxfiylik siyosati</li>
                            <li>Foydalanish shartlari</li>
                            <li>Ijtimoiy tarmoqlar</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
};