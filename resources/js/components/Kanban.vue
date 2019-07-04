<template>
    <div class="container">
        <kanban-board :stages="stages" :blocks="blocks"></kanban-board>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
            blocks: [
                {
                    id: 1,
                    status: 'on-hold',
                    title: 'Test',
                },
            ]
        }
    }    
}
</script>

