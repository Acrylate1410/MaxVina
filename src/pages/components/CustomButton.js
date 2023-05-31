export default function CustomButton(props) {
      return (
        <button class={props.extraStyle + " px-6 py-2.5 border border-" + props.c1 + " relative rounded-full group overflow-hidden font-medium bg-" + props.c2 + " text-" + props.c3 + " inline-block rounded-full "}>
                  <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-" + props.c3 + " group-hover:w-full"}></span>
                  <div class={"relative group-hover:text-" + props.c2 + " flex items-center justify-center undefined"}>
                    {props.content}
        </div>
      </button>
      )

}