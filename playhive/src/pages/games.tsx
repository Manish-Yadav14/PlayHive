import NavbarTwo from '@/components/NavbarTwo';
import Card from '@/components/Card'
const games_list = [
  {
    id:"1",
    title:"Tic Tac Toe",
    statement:"The classic Tic-Tac-Toe game",
    img:"/tictactoe.png"
  },
  {
    id:"2",
    title:"Dot and Boxes",
    statement:"The classic dot and boxes game",
    img:"/dotandboxes.png"
  },
];

function games() {
  return (
    <div className="h-full w-full dark:bg-black/[0.96] dark:text-white z-0">
      <div className="relative w-full flex items-center justify-center ">
        <NavbarTwo />
      </div>
      <div className='p-6 mt-16 flex justify-center items-center'>
        <div className='m-3 p-3 grid grid-cols-3 gap-4'>
          {games_list.map((game)=>(
            <div key={game.id}>
              <Card game={game}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default games