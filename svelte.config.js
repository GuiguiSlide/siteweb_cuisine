import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter({
      out: 'build'
    })
  }
};

const config = { kit: { adapter: adapter() } };

