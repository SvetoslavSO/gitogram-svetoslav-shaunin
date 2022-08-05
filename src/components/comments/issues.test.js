import { mount } from '@vue/test-utils';
import comments from './comments';

describe('issues component', ()=>{
  it('выполняет события ', async()=>{
    const wrapper = mount(comments);

    await wrapper.find('.toggler button').trigger('click');

    expect(wrapper.emitted().onToggle.length).toBe(1);
  });

  it('отрисует нужное кол-во элементов', async () => {
    const issue = {
      title: 'test-title',
      body: 'test-body'
    }

    const wrapper = mount(comments, {
      propsData: {
        issues: Array.from({length: 6}).map(x => issue)
      }
    })

    expect(wrapper.find('.comments-container').exists()).toBe(false);

    await wrapper.find('.toggler button').trigger('click');

    expect(wrapper.findAll('.comments-item').length).toBe(6);
  })

  it('не вызывается запросов если уже получены issues', async () => {
    const issue = {
      title: 'test-title',
      body: 'test-body'
    }

    const wrapper = mount(comments, {
      propsData: {
        issues: Array.from({length: 6}).map(x => issue)
      }
    })

    await wrapper.find('.toggler button').trigger('click');

    expect(wrapper.emitted().onToggle).toBeUndefined()
  })
})