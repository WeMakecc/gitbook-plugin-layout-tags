module.exports = {
    blocks: {
        // image: {
        //     process: function(block) {
        //         return "<p style='overflow:hidden'><img src='"+block.body+"' alt='"+block.args[0]+"' width='"+block.args[1]+"' align='"+block.args[2]+"' style='"+block.args[3]+"'></p>";
        //     }
        // },
        test: {
            blocks: ['image_url', 'image_text'],
            process: function(parentBlock) {
              var img_tag = "<img src='"+parentBlock.blocks[0].body+"' alt='"+parentBlock.blocks[0].args[0]+"' width='"+parentBlock.blocks[0].args[1]+"' align='"+parentBlock.blocks[0].args[2]+"' style='"+parentBlock.blocks[0].args[3]+"'>";
              var text_tag = parentBlock.blocks[1].body;
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