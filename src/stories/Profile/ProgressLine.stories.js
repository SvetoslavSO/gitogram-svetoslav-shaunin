import ProgressLine from "../../components/ProgressLine/ProgressLine.vue"

export default{
  title: "ProgressLine",
  components:  ProgressLine,
  argTypes:{
    onFinish:{
      action: 'onFinish',
      description: 'fires when progress reaches end'
    }
  }
}

const Progress = (args) => ({
  components: { ProgressLine },
  data (){
    return { args }
  },
  template: `
    <ProgressLine @onFinish="args.onFinish"/>
  `
});

export const ProgLine = Progress.bind({})