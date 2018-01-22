module.exports = {
    blocks: {
        // image: {
        //     process: function(block) {
        //         return "<p style='overflow:hidden'><img src='"+block.body+"' alt='"+block.args[0]+"' width='"+block.args[1]+"' align='"+block.args[2]+"' style='"+block.args[3]+"'></p>";
        //     }
        // },
        image: {
          blocks: {
            image_url {
              process: function(block) {
                  var img_tag = "<img src='"+block.body+"' alt='"+block.args[0]+"' width='"+block.args[1]+"' align='"+block.args[2]+"' style='"+block.args[3]+"'>";
              }
            },
            image_text {
              process: function(block) {
                  var text_tag = block.body;
              }
            }
          }
            process: function(block) {
                return "<p style='overflow:hidden'>"+img_tag+""+text_tag+"</p>";
            }
        },
        grid: {
            blocks: ['col'],
            process: function(parentBlock) {
                var columns = '';
                console.log(parentBlock.blocks);
                parentBlock.blocks.forEach((block) => {
                  columns += `<div style="flex: ${block.args[0]};">${block.body}</div>`;
                });

                return `<div style="display: flex;">${columns}</div>`;
            }
        }
    }
};